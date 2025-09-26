import data from "../assets/data.png";
import sql from "../assets/sql.png";
import power from "../assets/power.png";
import project from "../assets/project.png";
import python from "../assets/python.png";
import science from "../assets/science.png";
import certificate from "../assets/certificate.png";
import clarity from "../assets/clarity.png";
import review from "../assets/review.png";
import interview from "../assets/interview.png";

export const whatwedo = [
  {
    id: 0,
    name: "Live Learning & Mentorship",
    description:
      "We host interactive, beginner-friendly classes streamed live on Google Meet and YouTube. Each session is designed to make learning technology simple, practical, and engaging. With the guidance of experienced mentors, learners gain both knowledge and confidence.",
  },
  {
    id: 1,
    name: "Challenge-Based Learning",
    description:
      "We believe the best way to learn is by doing. That’s why learners participate in weekly real-world projects. These challenges help them practice skills hands-on, build meaningful portfolios, and develop proof points that employers and clients trust.",
  },
  {
    id: 2,
    name: "Community Support",
    description:
      "No one should learn in isolation. Our community is a safe space where learners connect, share experiences, ask questions, and find encouragement. Here, everyone grows together with guidance from mentors and support from peers.",
  },
  {
    id: 3,
    name: "Values-Driven Growth",
    description:
      "We are guided by principles of service, integrity, and transformation. Our doors are open to people from all backgrounds, united by a shared desire to learn, grow, and create impact through technology.",
  },
];

export const programs = [
  {
    id: 0,
    status: "Active",
    img: data,
    name: "Data Analysis with Excel",
    brief:
      "Learn how to clean, analyse and visualize data using Excel. Build practical skills to turn  raw data into actionable insights.",
    overview:
      "Learn how to clean, analyse, and visualize data using Excel. This course equips you with  practical skills to turn raw data into actionable insights for business and personal  projects. By the end, you will be able to confidently handle real-world datasets, build  dashboards and present data-driven insights.",
    audience: [
      "Beginners looking to start a career in data analytics",
      "Professionals who want to improve database and querying skills",
      "Students or entrepreneurs who want to analyse real-world datasets",
    ],
    offer: [
      "Gain hands-on experience with Excel for data analysis",
      "Learn to use formulas, calculated columns, pivot tables and charts effectively",
      "Build dashboards to visualize data insights",
      "Complete a real-world project to showcase your skills",
    ],
    requirements: [
      "A computer with Excel installed (2016 or later recommended)",
      " Basic familiarity with computers and a reliable internet connection",
      "Willingness to learn and complete weekly challenges",
    ],
    content: [
      {
        name: "Introduction & Data Cleaning",
        lessons: [
          "Understanding datasets",
          "Basic Excel functions (SUM, AVERAGE, COUNT, etc.)",
          "Removing duplicates, handling missing data and formatting",
        ],
      },
      {
        name: "Data Analysis, Formulas & Calculated Columns",
        lessons: [
          "Logical functions, VLOOKUP and XLOOKUP",
          "Conditional formatting",
          "Sorting, filtering, and summarizing data",
          "Creating calculated columns for business metrics",
        ],
      },
      {
        name: "Pivot Tables, KPIs & Charts",
        lessons: [
          "Introduction to pivot tables for dynamic analysis",
          "KPI calculations and tracking",
          "Using slicers for interactive reporting",
          "Creating charts and understanding the best use case for each",
        ],
      },
      {
        name: "Dashboard Design & Storytelling",
        lessons: [
          "Creating mood boards for dashboard inspiration",
          "Wireframing dashboards",
          "Combining charts and pivot tables into dashboards",
          "Adding KPIs and cards for business insights",
          "Presenting a mini data story project",
        ],
      },
      {
        name: "Project Dashboard & Presentation",
        lessons: [
          "Final project: build a full dashboard",
          "Prepare a PowerPoint presentation of your analysis",
          "Showcase insights, storytelling and recommendations",
        ],
      },
    ],
    link: "https://forms.gle/hD2QXbhAC2p4cN6n6",
  },

  {
    id: 1,
    status: "Active",
    img: sql,
    name: "Data Analysis with SQL",
    brief:
      "Master SQL to extract, query and manage data from databases. Gain the ability to  answer real-world business questions efficiently.",
    overview:
      "Learn how to extract, analyse, and report data from databases using SQL. This course  equips you with practical, project-based skills to turn raw data into actionable insights.  By the end, you will be able to confidently handle datasets, generate KPI and present  your findings in a portfolio-ready project.",
    audience: [
      "Beginners looking to start a career in data analytics",
      "Professionals who want to improve database and querying skills",
      "Students or entrepreneurs who want to analyse real-world datasets",
    ],
    offer: [
      "Gain hands-on, project-based SQL experience",
      "Learn to write queries, joins and advanced calculations",
      "Build a portfolio-ready project that showcases your skills",
      "Prepare for roles in data analytics, business intelligence and reporting",
    ],
    requirements: [
      "A computer with access to a SQL environment (MySQL Workbench)",
      "Basic familiarity with computers and a reliable internet connection",
      "Willingness to learn and complete weekly challenges",
    ],
    content: [
      {
        name: "Setup & Importing Data",
        lessons: [
          "Create a new database and tables",
          "Load CSV datasets into SQL",
          "Explore table structures and data types",
          "Make a backup copy of the database: Clean the data",
          "Project Task: Import a sample dataset and review its structure",
        ],
      },
      {
        name: "Basic Queries & Calculations",
        lessons: [
          "SELECT statements with filtering (WHERE) and sorting (ORDER BY)",
          "Aggregate functions: SUM, AVG, COUNT, MIN, MAX",
          "Creating calculated columns for business metrics",
          "Project Task: Write queries to summarize the dataset",
        ],
      },
      {
        name: "Joins, Relationships & KPIs",
        lessons: [
          "INNER, LEFT, RIGHT, FULL joins",
          "Subqueries for nested insights",
          "Calculating KPIs (e.g., total sales, average order value)",
          "Project Task: Join multiple tables and generate meaningful reports",
        ],
      },
      {
        name: "Advanced SQL & Reporting",
        lessons: [
          "Window functions: Row_Number, Rank, Dense_Rank",
          "Cases, Group By and Having Clauses for summaries",
          "Common Table Expressions (CTE)",
          "Project Task: Prepare KPI reports and aggregated datasets for dashboards",
        ],
      },
      {
        name: "Project Dashboard & Presentation",
        lessons: [
          "Build a complete SQL project using all queries and reports",
          "Document insights and recommendations",
          "Prepare a presentation (PowerPoint or PDF) of findings",
          "Portfolio Outcome: SQL project with queries, KPI reports and presentation ready",
        ],
      },
    ],
    link: "https://forms.gle/yz6wec6qqmr4eCHEA",
  },

  {
    id: 2,
    status: "Active",
    img: power,
    name: "Data Analysis with Power-BI",
    brief:
      "Transform data into interactive dashboards and reports. Learn to communicate insights  visually to support decision-making.",
    overview:
      "Learn how to turn raw data into interactive dashboards and actionable insights using  Power BI. This project-based course equips you with practical skills to clean, model,  visualize and present data in a portfolio-ready format.",
    audience: [
      "Beginners starting a career in data analytics or business intelligence",
      "Professionals who want to improve data visualization and reporting skills",
      "Students or entrepreneurs aiming to present clear, data-driven insights",
    ],
    offer: [
      "Gain hands-on experience building interactive dashboards",
      "Learn data cleaning, modelling, dax calculations and visualization in Power BI",
      "Develop a portfolio-ready project to showcase your skills",
      "Prepare for roles in analytics, business intelligence and reporting",
    ],
    requirements: [
      "A computer with Power BI Desktop installed",
      "Reliable internet connection",
      "Basic familiarity with Excel or datasets",
    ],
    content: [
      {
        name: "Introduction & Data Cleaning",
        lessons: [
          "Overview of Power BI interface",
          "Importing data from CSV, Excel and other sources",
          "Exploring tables, columns and data types",
          "Cleaning and transforming data with Power Query",
          "Creating Patient Primary Key (for unique identification)",
          "Project Task: Load, clean, create primary keys and prepare the dataset",
        ],
      },
      {
        name: "Data Modeling & Relationships",
        lessons: [
          "Creating Dimension and Facts Tables",
          "Introduction to calculated columns, date table and measures (DAX basics)",
          "Data modelling using the star schema",
          "Project Task: Build a star schema data model with fact, dimension and date tables",
        ],
      },
      {
        name: "Creating KPIs & Business Metrics",
        lessons: [
          "Introduction to DAX Measures",
          "Calculating KPIs and creating KPI Cards",
          "Project Task: Create DAX measures for KPIs and display them using KPI cards.",
        ],
      },
      {
        name: "Dashboard Design & Storytelling",
        lessons: [
          "Creating Charts (Donut, Line, Clustered Column, Clustered Bar)",
          "Using Slicers and Filters for Interactivity",
          "Creating mood boards for dashboard inspiration",
          "Wireframing dashboards for clarity and impact",
          "Combining visuals into cohesive dashboards with KPIs/cards",
          "Project Task: Build an interactive dashboard that tells a clear data story",
        ],
      },
      {
        name: "Project Dashboard & Presentation",
        lessons: [
          "Final project: Build a full interactive dashboard",
          "Document insights and recommendations",
          "Prepare a presentation showcasing the dashboard and analysis",
          "Project Outcome: Deliver a complete capstone dashboard with documented insights and a presentation",
        ],
      },
    ],
    link: "https://forms.gle/pTaABmKUqkPVcdMj7",
  },

  {
    id: 3,
    status: "Active",
    img: project,
    name: "Project Portfolio Program",
    brief:
      "Apply your skills to real-world projects and build a portfolio that showcases your  abilities to employers or clients.",
    overview:
      "The Project & Portfolio Program helps learners apply their Excel, SQL and Power BI  skills to real-world datasets. Participants work in groups to research, analyse and  present projects, building portfolio-ready work for GitHub and personal websites. By  the end, learners will have three professional projects demonstrating their data  analysis, visualization and storytelling abilities.",
    audience: [
      "Learners who have completed at least one core program (Excel, SQL or Power BI)",
      "Anyone who wants to apply skills in practical projects",
      "Learners seeking structured guidance, mentorship and portfolio development",
    ],
    offer: [
      "Work on real datasets and create projects that showcase practical skills",
      "Learn to research, plan and execute projects collaboratively",
      "Gain experience documenting projects on GitHub and personal websites",
      "Receive mentorship, weekly check-ins and structured timelines",
      "End with portfolio-ready projects for career advancement",
    ],
    requirements: [
      "Completion of at least one core program (Excel, SQL or Power BI)",
      "Reliable internet connection",
      "Willingness to collaborate in groups and commit to weekly milestones",
      "Basic familiarity with GitHub or willingness to learn",
    ],
    content: [
      {
        name: "Group Formation & Excel Project",
        lessons: [
          "Form project groups and select datasets",
          "Define project requirements and business case",
          "Work on Excel project:  Clean and structure data  Apply formulas, calculated columns and KPIs   Produce charts for analysis",
          "Cleaning and transforming data with Power Query",
          "Project Task: Load and clean a sample dataset",
        ],
      },
      {
        name: "SQL Project",
        lessons: [
          "Import dataset into a database (MySQL Workbench)",
          "Write queries, joins and aggregations",
          "Analyse data and generate KPI reports",
          "Prepare outputs for dashboards",
        ],
      },
      {
        name: "Power BI Project & GitHub Setup",
        lessons: [
          "Import cleaned datasets into Power BI",
          "Build interactive dashboards and KPIs",
          "GitHub Mini Session:  Create repositories and organize projects. Add README files describing datasets, methods and insights",
          "Begin documenting ongoing projects for GitHub and portfolio website",
        ],
      },
      {
        name: "Portfolio Documentation & Refinement",
        lessons: [
          "Refine all three projects (Excel, SQL, Power BI)",
          "Portfolio Website Session:  Upload projects to portfolio website (Notion, GitHub Pages or similar)  Prepare clear project descriptions and visuals",
          "Mentors provide feedback to polish projects",
        ],
      },
      {
        name: "Final Project Presentation & Showcase",
        lessons: [
          "Groups present projects individually",
          "Showcase projects publicly with GitHub links and portfolio website",
          "Portfolio Outcome: 3 professional, portfolio-ready projects demonstrating  analytical, visualization and storytelling skills",
        ],
      },
    ],
    link: "https://forms.gle/HekrNjjtEBTmfjjG8",
  },

  {
    id: 4,
    img: python,
    status: "Coming Soon",
    name: "Data Analysis with Python",
    brief:
      "Use Python to analyze, visualize and automate data tasks. Apply coding skills to solve  real-world analytics challenges.",
    overview: "",
    audience: [],
    offer: [],
    requirements: [],
    content: [],
    link: "",
  },

  {
    id: 5,
    status: "Coming Soon",
    img: science,
    name: "Data Science",
    brief:
      "Dive into predictive analytics, statistics and machine learning. Learn to extract insights  and make data-driven decisions.",
    overview: "",
    audience: [],
    offer: [],
    requirements: [],
    content: [],
    link: "",
  },
];

export const servicesRendered = [
  {
    id: 0,
    img: certificate,
    name: "Certification for completed courses",
    brief: "Learners receive  certificates after finishing courses.",
    description:
      "At Learn with George, we believe that every milestone in your learning journey deserves  to be celebrated. That’s why all learners who successfully complete a course will  receive an official e-certificate of completion.",
    steps: [
      {
        title: "Complete Your Course",
        step: [
          {
            list: [
              "Finish all sessions and assignments for your selected course or bootcamp.",
            ],
            sublist: [],
          },
        ],
      },
      {
        title: "Make Your Payment",
        step: [
          {
            list: ["Payments are made securely."],
            sublist: [],
          },
          {
            list: [
              "After making your payment, kindly take a screenshot of the payment receipt.",
            ],
            sublist: [],
          },
        ],
      },
      {
        title: "Send Payment Confirmation",
        step: [
          {
            list: [
              "Email your screenshot to learnwithgeorgejnr@gmail.com with the subject  line: “Certificate Payment - Your Full Name - Cohort Name”",
            ],
            sublist: [],
          },
          {
            list: ["In the body of your email, include the following details:"],
            sublist: [
              "Full Name (as you want it on your certificate)",
              "Course/Cohort (e.g., Excel Bootcamp - Cohort 2)",
              "Payment Reference/Transaction ID",
              "Email Address (for certificate delivery)",
            ],
          },
        ],
      },
      {
        title: "Certificate Delivery",
        step: [
          {
            list: [
              "Once payment is confirmed, your certificate will be processed.",
              "You will receive your official e-copy certificate via email within 48 hours of  confirmation.",
            ],
            sublist: [],
          },
        ],
      },
    ],
    notes: [
      "Ensure that the name you provide matches exactly how you want it displayed on  your certificate.",
      "Certificates are issued electronically only (PDF format).",
      "If you do not receive your certificate within 48 hours after confirmation, kindly  follow up by emailing learnwithgeorgejnr@gmail.com.",
    ],
  },
  {
    id: 1,
    img: clarity,
    name: "Clarity/Guidance Calls",
    brief:
      "Personal sessions with mentors to answer questions and provide tailored advice.",
    description:
      "At Learn with George, we provide one-on-one sessions with mentors to give you  personalized support.",
    steps: [
      {
        title: "Make Your Payment",
        step: [
          {
            list: ["Payments are made securely through Paystack."],
            sublist: [],
          },
          {
            list: ["After payment, kindly take a screenshot of your receipt."],
            sublist: [],
          },
        ],
      },
      {
        title: "Send Us Your Booking Email",
        step: [
          {
            list: [
              "Email your receipt screenshot to learnwithgeorgejnr@gmail.com with the  subject line: “Clarity Call - Your Full Name”",
            ],
            sublist: [],
          },
          {
            list: ["In your email, include:"],
            sublist: [
              "Full Name",
              "Preferred Date & Time for the call (please allow at least 48 hrs  notice)",
              "Duration you are booking (30 mins)",
              "Key Questions / Topics you would like to discuss",
              "WhatsApp number (for quick communication, if needed)",
            ],
          },
        ],
      },
      {
        title: "Receive Your Confirmation Email",
        step: [
          {
            list: [
              "After we verify your payment and review your session details, you will  receive a confirmation email within 48 hours.",
            ],
            sublist: [],
          },
          {
            list: ["This email will include:"],
            sublist: [
              "Confirmed date and time of your call",
              "A Google Meet / Zoom link for the session",
              "Any additional instructions",
            ],
          },
        ],
      },
    ],
    notes: [
      "Answer your specific questions",
      "Provide tailored advice for your learning journey",
      "Offer career guidance and practical next steps",
    ],
  },
  {
    id: 2,
    img: review,
    name: "CV/Portfolio Review",
    brief:
      "Expert feedback to polish resumes and portfolios for better career opportunities.",
    description:
      "Your CV and portfolio are your ticket to opportunities they showcase your skills, projects  and potential to employers.",
    steps: [
      {
        title: "Make Your Payment",
        step: [
          {
            list: ["Payments are made securely through Paystack."],
            sublist: [],
          },
          {
            list: ["After payment, kindly take a screenshot of your receipt."],
            sublist: [],
          },
        ],
      },

      {
        title: "Send Us Your Booking Email",
        step: [
          {
            list: [
              "Email your receipt screenshot to learnwithgeorgejnr@gmail.com with the  subject line: “CV/Portfolio Review  - Your Full Name”",
            ],
            sublist: [],
          },
          {
            list: ["In your email, include:"],
            sublist: [
              "Full Name",
              "Preferred Date & Time for the call (please allow at least 48 hrs  notice)",
              "Your Career Goal / Target Role (e.g., Data Analyst, Business  Analyst, etc.)",
              "Key concerns or questions (e.g., formatting, ATS compliance,  content clarity)",
            ],
          },
        ],
      },
      {
        title: "Receive Your Confirmation Email",
        step: [
          {
            list: [
              "Once payment is verified and your details reviewed, you’ll receive a  confirmation email within 48 hours with:",
            ],
            sublist: [
              "Confirmed session date & time",
              "Google Meet / Zoom link for your call",
            ],
          },
        ],
      },
      {
        title: "Live Review Session (30 minutes)",
        step: [
          {
            list: [],
            sublist: [
              "Walk through your CV and/or portfolio with a mentor",
              "Get real-time feedback and tailored advice",
              "Ask questions and leave with clear action steps to improve your  documents",
            ],
          },
        ],
      },
    ],
    notes: [
      "Duration: Each review session lasts 30 minutes.",
      "Please send your CV/portfolio at least 24 hours before the session for proper  review.",
      "If you need more time for deeper discussion, you can book a Clarity/Guidance  Call separately.",
      "Rescheduling is possible with 24 hours notice.",
    ],
  },
  {
    id: 3,
    img: interview,
    name: "Interview Simulations",
    brief:
      "Practice real-world interview scenarios to build confidence and improve performance.",
    description:
      "Interviews can be intimidating, but with the right preparation, you can walk in confident  and ready.",
    steps: [
      {
        title: "Make Your Payment",
        step: [
          {
            list: ["Payments are made securely through Paystack."],
            sublist: [],
          },
          {
            list: ["After payment, kindly take a screenshot of your receipt."],
            sublist: [],
          },
        ],
      },
      {
        title: "Send Us Your Booking Email",
        step: [
          {
            list: [
              "Email your receipt screenshot to learnwithgeorgejnr@gmail.com with the  subject line: “Interview Simulation - Your Full Name”",
            ],
            sublist: [],
          },
          {
            list: ["In your email, include:"],
            sublist: [
              "Full Name",
              "Preferred Date & Time for the call (please allow at least 48 hrs  notice)",
              "CV/Portfolio (Word, PDF, or Notion link)",
              "Job Title, Role, and Company you are interviewing for",
              "Any specific areas you would like to focus on (e.g., technical  questions, behavioral questions, STAR method, confidence  building)",
            ],
          },
        ],
      },
      {
        title: "Receive Your Confirmation Email",
        step: [
          {
            list: [
              "Once payment is verified and your details reviewed, you’ll receive a  confirmation email within 48 hours with:",
            ],
            sublist: [
              "Confirmed session date & time",
              "Google Meet / Zoom link for your call",
              "Any pre-session instructions",
            ],
          },
        ],
      },
      {
        title: "Live Review Session (30 minutes)",
        step: [
          {
            list: [],
            sublist: [
              "Participate in a mock interview tailored to your specific role and company",
              "Receive real-time feedback on answers, presentation and confidence",
              "Get actionable tips to improve your performance in actual interviews",
            ],
          },
        ],
      },
    ],
    notes: [
      "Duration: Each simulation lasts 30 minutes.",
      "Sending your CV/portfolio and details of the interview role/company is required  for a fully personalized session.",
      "Rescheduling is possible with 24 hours notice.",
      "You can book multiple sessions to practice different scenarios or focus areas.",
    ],
  },
];
