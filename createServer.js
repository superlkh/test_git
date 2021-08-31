// Bước 1: Import module http
var http = require('http');
var fs = require('fs');
 
// Bước 2: Khởi tạo server
var server = http.createServer(function(request, response){
    
     
    if (request.url == '/about.html')
    {
        response.setHeader('author','LKH')
        response.setHeader('timeConnect','L2s')
        response.setHeader('Context-type','text/html')
        //Thiết lập Header
        response.writeHead(200, {
            "Context-type" : "text/html2"
        });
         
        // Show thông tin trang about
        fs.createReadStream('./about.html').pipe(response);
    }
    else // trường hợp ngược lại ko tìm thấy file
    {
        // Thiết lập Header
        response.writeHead(404, {
            "Context-type" : "text/plain"
        });
         
        // Show lỗi không tìm thấy trang
        response.write('404 Not Found ' + request.url);
         
        // Kết thúc
        response.end();
    }

});
 
// Bước 3: Lắng nghe cổng 300 thì thực hiện chương trình
server.listen(3000, function(){
    console.log('Connected Successfull!');
});