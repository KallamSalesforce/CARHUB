public class AccountCreation {

    // public static void CreateAcc(){
        
    //     Account acc = new Account();
    //     acc.Name = 'Kallam Sriram1';
    //     acc.BillingCity= 'Hyd';
    //     acc.Rating = 'Hot';
    //     acc.Website = 'tcs';
    //     acc.Phone = '5678902345';
    //     insert acc;
        
    // }
    public class CRMI_UserTriggerHandler {
        public static void CreateDeactivatedRole(List<User> usersOld,List<User> usersNew){
            UserRole ur1 = [SELECT Id, Name, DeveloperName FROM UserRole where DeveloperName =: System.Label.Deactivated_User_Role_Name];
            Map<Id,List<PermissionSetAssignment>> userPermSetMap = new Map<Id,List<PermissionSetAssignment>>();
            Map<Id,List<PermissionSetLicenseAssign>> userPermLiceSetMap = new Map<Id,List<PermissionSetLicenseAssign>>();
            Map<Id,List<GroupMember>> userGrpMemMap = new Map<Id,List<GroupMember>>();
            Map<Id,List<UserPackageLicense>> userPkgLiceMap = new Map<Id,List<UserPackageLicense>>();
            List<PermissionSetAssignment> psaTemp = new List<PermissionSetAssignment>();
            List<PermissionSetAssignment> psaToDelete = new List<PermissionSetAssignment>();
            List<PermissionSetLicenseAssign> pslaTemp = new List<PermissionSetLicenseAssign>();
            List<PermissionSetLicenseAssign> pslaToDelete = new List<PermissionSetLicenseAssign>();
            List<GroupMember> gmTemp = new List<GroupMember>();
            List<GroupMember> gmToDelete = new List<GroupMember>();
            List<UserPackageLicense> uplTemp = new List<UserPackageLicense>();
            List<UserPackageLicense> uplToDelete = new List<UserPackageLicense>();
            List<Id>UserIds = new List<Id>();
            Map<Id,Boolean>userBeforeUpdateIsactive = new Map<Id,Boolean>();
            for(user u :usersOld){
                userBeforeUpdateIsactive.put(u.id,u.IsActive);
            }
            for(user u :usersNew){
                if((userBeforeUpdateIsactive.get(u.Id) != u.IsActive) && !u.IsActive){
                    UserIds.add(u.Id);
                }
            }
            List<PermissionSetAssignment> permSetsUsers = [SELECT Id, AssigneeId,PermissionSetId from PermissionSetAssignment where AssigneeId IN: UserIds  AND Permissionset.IsOwnedByProfile =false];
            List<PermissionSetLicenseAssign> permSetsLiceUsers = [SELECT Id, AssigneeId from PermissionSetLicenseAssign where AssigneeId IN: UserIds];
            List<GroupMember> grpMemUsers = [SELECT Id, GroupId, UserOrGroupId FROM GroupMember WHERE UserorGroupId IN : userIds]; 
            List<UserPackageLicense> uplUsers = [SELECT UserId, PackageLicense.NamespacePrefix FROM UserPackageLicense where UserId IN: UserIds];
            for(user u :usersNew){
                if((userBeforeUpdateIsactive.get(u.Id) != u.IsActive) && !u.IsActive){
                    for(PermissionSetAssignment psa :permSetsUsers){
                        if(psa.AssigneeId == u.Id){
                            if(!userPermSetMap.containsKey(u.id)){
                                psaTemp.add(psa);
                                userPermSetMap.put(u.id,psaTemp);
                            } 
                            else{
                                   userPermSetMap.get(u.id).add(psa); 
                            }
                        }
                           psaTemp =new List<PermissionSetAssignment>(); 
                    }
                    for(PermissionSetLicenseAssign psla :permSetsLiceUsers){
                        if(psla.AssigneeId == u.Id){
                            if(!userPermLiceSetMap.containsKey(u.id)){
                                pslaTemp.add(psla);
                                userPermLiceSetMap.put(u.id,pslaTemp);
                            } 
                            else{
                                   userPermLiceSetMap.get(u.id).add(psla); 
                            }
                        }
                           pslaTemp =new List<PermissionSetLicenseAssign>(); 
                    }
                    for(GroupMember gm :grpMemUsers){
                        if(gm.UserorGroupId == u.Id){
                            if(!userGrpMemMap.containsKey(u.id)){
                                gmTemp.add(gm);
                                userGrpMemMap.put(u.id,gmTemp);
                            } 
                            else{
                                   userGrpMemMap.get(u.id).add(gm); 
                            }
                        }
                           gmTemp =new List<GroupMember>(); 
                    }
                    for(UserPackageLicense upl :uplUsers){
                        if(upl.UserId == u.Id){
                            if(!userPkgLiceMap.containsKey(u.id)){
                                uplTemp.add(upl);
                                userPkgLiceMap.put(u.id,uplTemp);
                            } 
                            else{
                                   userPkgLiceMap.get(u.id).add(upl); 
                            }
                        }
                           uplTemp =new List<UserPackageLicense>(); 
                    }
                }
            }
            for(user u :usersNew){
                if(!u.IsActive){
                    u.UserRoleId = ur1.Id;
                    if(userPermSetMap.size()>0){
                        psaToDelete.addAll(userPermSetMap.get(u.Id));
                    }
                    if(userPermLiceSetMap.size()>0){
                        pslaToDelete.addAll(userPermLiceSetMap.get(u.Id));
                    }
                    if(userGrpMemMap.size()>0){
                        gmToDelete.addAll(userGrpMemMap.get(u.Id));
                    }
                    if(userPkgLiceMap.size()>0){
                        uplToDelete.addAll(userPkgLiceMap.get(u.Id));
                    }
                }   
            }
                    if(psaToDelete.size()>0){
                delete psaToDelete;
            }
            if(pslaToDelete.size()>0){
                delete pslaToDelete;
            }
            if(gmToDelete.size()>0){
                delete gmToDelete;
            }
            if(uplToDelete.size()>0){
                delete uplToDelete;
                System.debug('Hello12345');
            } 
        }        
    }
}