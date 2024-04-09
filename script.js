function printSlip() {
    var slipContent = document.querySelector('.slip').innerHTML;
    var printWindow = window.open('', '', '');
    printWindow.document.write('<html><head><title>Printed Salary Slip</title><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"><style>main{margin: 0px 0px 0px 20px;overflow: hidden;}.slip{border: 1px solid black;border-radius: 10px;margin: 10px 20px;padding: 10px;}.left-img img{margin: 25px 0px 0px -30px;}</style></head><body></body></html>');
    var body = printWindow.document.querySelector('body');
    body.innerHTML = slipContent;
    
    var scripts = printWindow.document.querySelectorAll('script');
    scripts.forEach(function(script) {
        script.remove();
    });
    printWindow.document.close();
    printWindow.print();
}