//'use strict';

var bio = {
    name: "Roger Grossman",
    role: "Front End Web Developer",
    contacts: {
        mobile: "914.907.1497",
        email: "roger@rogergrossman.com",
        github: "LoneRangerCA",
        twitter: "",
        location: "Concord, CA"
    },
    welcomeMessage: "Thanks for viewing my resume.  Please feel free to contact me if you have any questions.",
    skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Too many to describe here",
        "Suffice to say many years as a programmer, web developer and software manager"
    ],
    biopic: "http://bayareatherapynow.com/wp-content/uploads/2015/04/e9c5a2d0625df416f0c4e8042bf21ef6.jpeg",
};

bio.display = function() {
    var welcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var email = HTMLemail.replace("%data%", bio.contacts.email);
    var github = HTMLgithub.replace("%data%", bio.contacts.github);
    var biolocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var role = HTMLheaderRole.replace("%data%", bio.role);
    var pictureURL = HTMLbioPic.replace("%data%", bio.biopic);
    var bioname = HTMLheaderName.replace("%data%", bio.name);

    $("#header").prepend(pictureURL);
    $("#header").prepend(role);
    $("#header").prepend(bioname);
    
    $('#topContacts, #footerContacts').prepend(welcome);
    $('#topContacts, #footerContacts').prepend(biolocation);
    $('#topContacts, #footerContacts').prepend(github);
    $('#topContacts, #footerContacts').prepend(email);
    $('#topContacts, #footerContacts').prepend(mobile);

    if (bio.skills) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills-h3").append(formattedSkill);
        }
    }
};

//  $("#main").append(internationalizeButton);

bio.display();

var education = {
    schools: [{
        name: "Mercy College",
        location: "Dobbs Ferry, NY",
        degree: "Masters with distinction",
    majors: [
        "Marriage and Family Therapy"
    ],
        dates: "2008 to 2010",
        url: "www.mercy.edu",
    }, {
        name: "New York University",
        location: "New York, NY",
        degree: "BA",
    majors: [
        "Philosophy",
        "Computer Science"
    ],
        dates: "1973-1976",
        url: "www.nyu.edu",
    }],
    OnlineCourses: [{
        title: "Front End Web Developer",
        school: "Udacity",
        date: "2016",
        url: "www.udacity.com"
    }]
};

education.display = function() {
    var schoolidx = 0;
    while (education.schools[schoolidx]) {
        var FormattedschoolName = HTMLschoolName.replace("%data%", education.schools[schoolidx].name);
        var FormattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[schoolidx].location);
        var FormattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[schoolidx].degree);
        var FormattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[schoolidx].dates);

    if (education.schools[schoolidx].majors) {
        for (var i = 0; i < education.schools[schoolidx].majors.length; i++) {
          var FormattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
          $("#education-entry").append(FormattedschoolMajor);
        }

        $("#education").append(HTMLschoolStart);
        var FormattedSchoolEntry = "<br>" + FormattedschoolName + FormattedschoolLocation + FormattedschoolMajor + FormattedschoolDegree + FormattedschoolDates;
        $(".education-entry:last").append(FormattedSchoolEntry);
        
    }
        
        schoolidx = schoolidx + 1;
    }

    $(".education-entry:last").append(HTMLonlineClasses);
    var OnlineCourseidx = 0;
    do {
        var FormattedonlineTitle = HTMLonlineTitle.replace("%data%", education.OnlineCourses[OnlineCourseidx].title);
        var FormattedonlineSchool = HTMLonlineSchool.replace("%data%", education.OnlineCourses[OnlineCourseidx].school);
        var FormattedschoolonlineDates = HTMLonlineDates.replace("%data%", education.OnlineCourses[OnlineCourseidx].date);
        var FormattedschoolonlineURL = HTMLonlineURL.replace("%data%", education.OnlineCourses[OnlineCourseidx].url);

        var FormattedOnline = FormattedonlineTitle + FormattedonlineSchool + FormattedschoolonlineDates + FormattedschoolonlineURL;
        $(".education-entry:last").append(FormattedOnline);

        OnlineCourseidx = OnlineCourseidx + 1;
    }
    while (education.OnlineCourses[OnlineCourseidx]);
};

education.display();

var work = {
    jobs: [{
        employer: "Bi-Bett Corp.",
        title: "Substance Abuse Counselor",
        location: "Clayton, CA",
        dates: "2015 to 2016",
        description: "Changing addict's life stories"
    }, {
        employer: "Pragmatix",
        title: "Development Manager",
        location: "Hawthorne, NY",
        dates: "2000 to 2002",
        description: "Manager of software for an internet company"
    }, ]
};

work.display = function() {
    var jobidx = 0;
    while (work.jobs[jobidx]) {
        var FormattedworkJob = HTMLworkTitle.replace("%data%", work.jobs[jobidx].title);
        var FormattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[jobidx].employer);
        var FormattedworkworkDates = HTMLworkDates.replace("%data%", work.jobs[jobidx].dates);
        var FormattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[jobidx].location);
        var FormattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[jobidx].description);

        var FormattedJob = FormattedworkEmployer + FormattedworkJob + FormattedworkworkDates + FormattedworkLocation + FormattedworkDescription;
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(FormattedJob);

        jobidx = jobidx + 1;
    }
};

work.display();

var projects = {
    projects: [{
        title: "Portfolio",
        dates: "04/2016 to 05/2016",
        description: "Build a framework to demonstrate project portfolio",
        images: [
        "https://cdn.projectsmart.co.uk/img/project-portfolio.png"
        ]
    }, {
        title: "Resume",
        dates: "05/2016 to 05/2016",
        description: "Create an online resume",
        images: [
        "http://catchingreality.com/wp-content/uploads/2015/10/free-resume-template-download-uf9hlkw4.png"
        ]
    }]
};

projects.display = function() {
    var projectidx = 0;
    while (projects.projects[projectidx]) {
        var FormattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[projectidx].title);
        var FormattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[projectidx].dates);
        var FormattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[projectidx].description);
        var FormattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[projectidx].images);
        console.log(FormattedprojectImage);
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(FormattedprojectTitle + FormattedprojectDates + FormattedprojectDescription + FormattedprojectImage);

        projectidx = projectidx + 1;
    }
};

projects.display();

$("#mapDiv").append(googleMap);

function locationizer(work_obj) {

    var arrlocationarray = [];
    //  var arrlocationarray = new Array();
    for (var i = 0; i < work.jobs.length; i++) {
        arrlocationarray.push(work.jobs[i].location);
    }
    return arrlocationarray;
}

/*
  bio.BioName = inName(bio.BioName)
  
function inName(InputName) {
  var idx = InputName.search(" ")
  var outFirstName = InputName.slice(0,idx);
  var outLastName = InputName.slice(idx);
  outLastName = outLastName.toUpperCase();
  return(outFirstName + outLastName);
}
*/