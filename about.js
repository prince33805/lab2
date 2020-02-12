/*$('#button').click(() => {
db.collection("users")
    .add({
        subject: $('#subject').val(),
        credit: '3',
        grade: Number($('#grade').val()),
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        $('#subject').val('')
        $('#grade').val('')
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
})
/*db.collection('users').orderBy("subject").onSnapshot(doc => {
        let table = $('tbody')[0]
        $("tbody tr").remove()
        gpa = 0
        credit = 0
        //document.querySelectorAll("tbody tr").forEach(item => item.remove())
        doc.forEach(item => {
            let row = table.insertRow(-1)
            let firstCell = row.insertCell(0)
            let secoundCell = row.insertCell(1)
            firstCell.textContent = item.data().subject
            secoundCell.textContent = item.data().grade
            gpa += ((item.data().grade) * (item.data().credit))
            credit += item.data().credit
        })
        console.log(gpa/credit)
        $('h4').text(gpa/credit)
    })
*/

// index.js
//let firebaseConfig = {
 //   apiKey: "AIzaSyBzfdUNQR9e0fVLbnSA_eSva6oP3feq9HI",
 //   authDomain: "localhost",
 //   projectId: "database-2d6f4",
//};
// Initialize Firebase
let firebaseConfig = {
    apiKey: "AIzaSyBvkd5egokGmg985viswvfDthqCGAb5GDY",
    authDomain: "localhost",
    projectId: "xibho007",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();




$('button').click(() => {

    db.collection("users").add({
        name: $('#name').val(),
        gender: $('#gender').val(),
        email: $('#email').val(),
        detail: $('#detail').val(),
          
            
        })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            $('#name').val(' ')
            $('#gender').val(' ')
            $('#email').val(' ')
            $('#detail').val(' ')
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
});


db.collection("users").onSnapshot(doc=>{
    let table = $('tbody')[0]
   
   
    $("tbody tr").remove();
    
    doc.forEach(item=>{
        let row= table.insertRow(-1)
        let firstcell =row.insertCell(0)
        let secondcell =row.insertCell(1)
        let thirdcell =row.insertCell(2)
        let fourthcell = row.insertCell(3)
        firstcell.textContent=item.data().name
        secondcell.textContent=item.data().gender
        thirdcell.textContent=item.data().email
        fourthcell.textContent=item.data().detail
       
    })
  
})