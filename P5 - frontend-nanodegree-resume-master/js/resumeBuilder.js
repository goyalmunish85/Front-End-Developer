var bio = {
	"name" : "Munish Goyal",
	"role" : "Student",
	"contacts" : {
		"mobile" : "8146211806",
		"email"  : "goyalmunish85@gmail.com",
		"location" : "Punjab",
		"twitter" : "@goyalmunish85",
        "github" : "@goyalmunish85"
	},
	"welcomeMessage" : "See my resume",
	"skills" : ["Programming","Networking","Web Developing","Others"],
	"biopic" : "images/fry.jpg"
};
bio.display = function(){
$("#header").prepend(HTMLbioPic.replace("%data%", bio.biopic));
$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
$("#topContacts,#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#topContacts,#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#topContacts,#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
$("#topContacts,#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#topContacts,#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (i = 0; i < bio.skills.length; i++) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    }
}
}
bio.display();
var work = {
	'jobs' : [{
	"employer" : "Chitkara University",
    "title" : "Student",
    "dates" : "2nd-Batch",
    "location" : "Chitkara university, Village Jhansla, Patiala, Punjab",
    "description" : "B.E.(Computer Science)"
	}]
}
work.display = function()
{
for (var i=0;i<work.jobs.length;i++) {
        $("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[i].employer) + HTMLworkTitle.replace("%data%", work.jobs[i].title), HTMLworkDates.replace("%data%", work.jobs[i].dates), HTMLworkLocation.replace("%data%", work.jobs[i].location), HTMLworkDescription.replace("%data%", work.jobs[i].description));

    }
}
work.display();
var education= {
	"schools" : [
	{
	 "name" : "Modern Secular Public School",
	 "location" : "Daulatpur Rd, Janta Nagar, Dhuri, Punjab ",
	 "dates" : "before-2013",
	 "degree" : "Middle-School",
	 "majors" : ["Matric"]
	},
	{
	 "name" : "Y.S.",
	 "location" : "New Bus Stand Rd, Barnala, Punjab ",
	 "dates" : "2013-2015",
	 "degree" : "High-School",
	 "majors" : ["Non-Medical"]
	},
	{
	 "name" : "Chitkara University",
	 "location" : "Chitkara university, Village Jhansla, Patiala, Punjab",
	 "dates" : "2015-2019",
	 "degree" : "B.E.",
	 "majors" : ["Computer Science"]
	}]
};
education.display = function() {
    for (i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[i].name) + HTMLschoolDegree.replace("%data%", education.schools[i].degree));
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors));
    }

};
education.display();
var projects = {
    "projects": [{
            "title": "Hydro-electrical Generator",
            "dates": "16-Aug-2015",
            "description": "The mechanical energy of moving water is transferred by a rotating turbine to a generator, where it is converted to electric energy and conveyed along transmission lines.",
            "images": ['images/h.jpg']
        },
        {
            "title": "Animal trading Cards Master",
            "dates": "29-Jan-2017",
            "description": "Description About animal of Polar Bear.",
            "images": ['images/a.png']
        }
    ]
};

//display project
projects.display = function() {
    for (i=0; i<projects.projects.length;i++) {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title), HTMLprojectDates.replace("%data%", projects.projects[i].dates) + HTMLprojectDescription.replace("%data%", projects.projects[i].description));

        if (projects.projects[i].images.length > 0) {
            for (j=0;j<projects.projects[i].images.length;j++)
                $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i].images[j]));
        }
    }
};

projects.display();
$("#mapDiv").append(googleMap);
