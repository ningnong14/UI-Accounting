//***เปลี่ยนแปลง stateจะเกิดขึ้นก็ต่อเมื่อ เป็น object ถ้าเกิด เป็น array มันจะมองไม่เห็นการเปลี่ยนแปลง เวลาสร้างก็ให้ดู Model**
let dataAddMainAccount = {
    data:[]
};
let isDataUpload={
    status:false
}
let functionName = ["Search Voucher","Add MainAccount","Record Voucher","Function 4"]

let headerTableMainAccount = {
    head:["MainAccount","Name"]
}
let headerTableRecordAccount = {
    head:["Date(DD/MM/YYYY)","TagVoucher","MainAccount","Description","Credit","Debit"]
}
let addBodyCountTable={
    count:1,
    name:""
}


export {
    dataAddMainAccount,
    isDataUpload,
    functionName,
    headerTableMainAccount,
    headerTableRecordAccount,
    addBodyCountTable
}
