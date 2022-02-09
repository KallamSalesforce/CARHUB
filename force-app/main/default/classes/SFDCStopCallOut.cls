public with sharing class SFDCStopCallOut {
    

    public static void getBlogs(){
    HTTP http = new Http();

    HttpRequest request = new HttpRequest();
    //Setting up the EndPoint
    request.setEndpoint('https://sfdcstop.herokuapp.com/blogs');
    request.setMethod('GET');
    //Hitting the API and getting the responsce
    //HTTPResponse response = http.send(request);
    HTTPResponse response = http.send(request);
    //Check the Status Code in the Responsce
    if(response.getStatusCode()== 200){
        SFDCStopApi responsceWrapper =  SFDCStopApi.parse(response.getBody());
        //Display the Author Information
        System.debug('Author '+responsceWrapper.author);
        if(responsceWrapper.blogs != null && responsceWrapper.blogs.isEmpty()){

            for(Integer i=0; i< responsceWrapper.blogs.size(); i++){
                SFDCStopApi.Blogs  blog =  responsceWrapper.blogs.get(i);
                System.debug('BLog Id is '+blog.id);
                System.debug('Blog Title '+blog.title);
                System.debug('Blog URL IS' +blog.url);
            }
        }
    }

    }
}