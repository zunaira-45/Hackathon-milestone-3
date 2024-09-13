// Get the form element
const form =document.getElementById('resume-form') as HTMLFormElement;

// Get the resume display element
const resumeDisplayElement= document.getElementById('resume-display') as HTMLDivElement;

// Add an event listener to the form submission
form.addEventListener('submit',(event:Event) =>{
    event.preventDefault();

// Get the values from the form inputs
    const name=(document.getElementById('name') as HTMLInputElement).value
    const email=(document.getElementById('email') as HTMLInputElement).value
    const phone=(document.getElementById('phone') as HTMLInputElement).value
    const education=(document.getElementById('education') as HTMLInputElement).value
    const experience=(document.getElementById('experience') as HTMLInputElement).value
    const skills=(document.getElementById('skills') as HTMLInputElement).value
   
    // Create the resume HTML template
     const resumeHTML=`
    <h2><b> Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name: </b>${name}</p>
    <p><b>Email:</b>${email}</p>
    <p><b>Phone:</b> ${phone}</p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Experience</h3?
    <p>${experience}</p>

    <h3>Skills</h3>
    <p>${skills}</p>
    `;
    // Check if the resume display element exists
if(resumeDisplayElement){
        resumeDisplayElement.innerHTML=resumeHTML;
    }else{
        console.error('The resume Display Element is missing');
    }



})