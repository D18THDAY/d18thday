let names = "Oluwaseun Sofoluwe Samuel";
const courses = ["html", "css", "Javascript", "UI/UX"];


console.log(`Names: ${names}, Courses: ${courses}`);

if(courses.length % 2===0){
    for(counter = 1; counter <=200; counter++){
        if(counter % 2 ===0){
            console.log(counter)
        }
    }
    
}else{
    for(counter = 1; counter <=200; counter++){
        if(counter % 2 != 0){
            console.log(counter)
        }
    }
}
