// storing data related to the web app here (baiscally using this as a sort of database)
// in a real scenario, we would be fetching this data from an api

const jobs = [
  // first
  {
    id: 1,
    companyName: "Google",
    companyLogo:
      "https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip",
    jobRole: "Senior Software Engineer",
    applicationStatus: "Accepted",
    applicationTimeline: ["11-May-2022", "15-May-2022", "18-May-2022"],
    dateApplied: "11-May-2022",
    jobDescription: [
      "Bachelor's degree or equivalent practical experience",
      "2 years of experience with software development in one or more programming languages (e.g., Python, C, C++, Java, JavaScript)",
      "2 years of experience with data structures or algorithms in either an academic or industry setting",
      "1 year of experience with Linux Kernel or AOSP based systems",
    ],
    events: [
      {
        eventName: "Non-Technical Interview",
        eventDate: "21-May-2022",
        eventTime: "11:00 am",
        eventDuration: "45",
      },
      {
        eventName: "Technical Interview",
        eventDate: "26-May-2022",
        eventTime: "12:00 am",
        eventDuration: "120",
      },
    ],
  },
  // second
  {
    id: 2,
    companyName: "Aviate",
    companyLogo:
      "https://photos.angel.co/startups/i/6765601-65a00a5d557603204f5362a4df0bc778-medium_jpg.jpg?buster=1548945527",
    jobRole: "Front-End Development Intern (React.js)",
    applicationStatus: "Reviewing",
    applicationTimeline: ["23-Aug-2022", "1-Sept-2022"],
    dateApplied: "23-Aug-2022",
    jobDescription: [
      "Aviate is solving pressing problems to unlock a multi-billion dollar opportunity and a chance to transform the recruitment and job-preparation markets in India.",
      "Aviate has also been shortlisted by the early-stage quant fund of AngelList as one of the top percentile start-ups in India based on our hiring signals.",
      "A Front-End developer with an exceptional command on React.js",
      "Minimum experience of 6+ months in internships/projects in a growth-stage or early-stage venture will be preferred",
    ],
    events: [],
  },
  {
    id: 3,
    companyName: "Facebook",
    companyLogo:
      "https://cdn.icon-icons.com/icons2/1826/PNG/512/4202110facebooklogosocialsocialmedia-115707_115594.png",
    jobRole: "Android Software Engineer",
    applicationStatus: "Rejected",
    applicationTimeline: ["1-June-2022", "3-June-2022", "7-June-2022"],
    dateApplied: "1-June-2022",
    jobDescription: [
      "Lead complex technical or product efforts across many engineers and provide technical guidance and mentorship to peers",
      "Work closely with our product and design teams to build new and innovative application experiences for Android",
      "Analyze and optimize UI and infrastructure application code for quality, efficiency, and performance",
      "Build reusable Android software components for interfacing with our back-end platforms and Implement custom native user interfaces using the latest Android programming techniques",
    ],
    events: [],
  },
  {
    id: 4,
    companyName: "Twitter",
    companyLogo: "https://cdn-icons-png.flaticon.com/512/124/124021.png",
    jobRole: "Software Engineer",
    applicationStatus: "Accepted",
    applicationTimeline: ["1-July-2022", "3-July-2022", "9-July-2022"],
    dateApplied: "1-June-2022",
    jobDescription: [
      "Lead complex technical or product efforts across many engineers and provide technical guidance and mentorship to peers",
      "Work closely with our product and design teams to build new and innovative application experiences for Android",
      "Analyze and optimize UI and infrastructure application code for quality, efficiency, and performance",
      "Build reusable Android software components for interfacing with our back-end platforms and Implement custom native user interfaces using the latest Android programming techniques",
    ],
    events: [
      {
        eventName: "HR Interview",
        eventDate: "11-July-2022",
        eventTime: "11:00 am",
        eventDuration: "45",
      },
      {
        eventName: "Technical Interview",
        eventDate: "16-July-2022",
        eventTime: "12:00 am",
        eventDuration: "120",
      },
    ],
  },
];

export default jobs;
