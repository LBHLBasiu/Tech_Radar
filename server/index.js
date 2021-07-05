const express = require("express");
const path = require('path');

const PORT = 8000;
const HOST = '0.0.0.0';

const BUILD_PATH = "../tech_radar_app/build";

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, BUILD_PATH)));

// Handle GET requests to /api route (example)
app.get("/api", (req, res) => {
  res.json(INITIAL_DOT_DATA);
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, BUILD_PATH, 'index.html'));
});

app.listen(PORT,HOST);
console.log(`Server listening on http://${HOST}:${PORT}`);

var INITIAL_DOT_DATA = {
  'top-left': [
    {
      name: 'C# - .Net Core',
      description: 'Microsoft Tech Stack',
      id: 1,
      posX: '85px',
      posY: '180px'
    },
    {
      name: 'Javascript',
      description: 'JavaScript',
      id: 2,
      posX: '193px',
      posY: '234px'
    },
    {
      name: 'React JS',
      description: 'REACT',
      id: 3,
      posX: '270px',
      posY: '50px'
    },
    {
      name: 'SQL',
      description: 'sample',
      id: 4,
      posX: '215px',
      posY: '125px'
    },
    {
      name: 'HTML',
      description: 'sample',
      id: 5,
      posX: '113px',
      posY: '130px'
    },
    {
      name: 'CSS',
      description: 'sample',
      id: 6,
      posX: '280px',
      posY: '7px'
    },
    {
      name: 'Kotlin',
      description: 'sample',
      id: 7,
      posX: '115px',
      posY: '231px'
    },
    {
      name: 'Spring Boot',
      description: 'sample',
      id: 8,
      posX: '237px',
      posY: '213px'
    },
    {
      name: 'TypeScript',
      description: 'sample',
      id: 9,
      posX: '98px',
      posY: '279px'
    },
    {
      name: 'React',
      description: 'sample',
      id: 10,
      posX: '157px',
      posY: '190px'
    },
    {
      name: 'Redux',
      description: 'sample',
      id: 11,
      posX: '145px',
      posY: '288px'
    },
    {
      name: 'Next.js',
      description: 'sample',
      id: 12,
      posX: '255px',
      posY: '110px'
    },
    {
      name: 'Node.js',
      description: 'sample',
      id: 13,
      posX: '5px',
      posY: '22px'
    },
    {
      name: 'Ruby On Rails',
      description: 'sample',
      id: 14,
      posX: '50px',
      posY: '194px'
    },
    {
      name: 'EJS',
      description: 'sample',
      id: 15,
      posX: '212px',
      posY: '187px'
    },
    {
      name: 'HCL',
      description: 'sample',
      id: 16,
      posX: '50px',
      posY: '145px'
    },
    {
      name: 'PHP',
      description: 'sample',
      id: 17,
      posX: '135px',
      posY: '15px'
    },
    {
      name: 'Python',
      description: 'sample',
      id: 18,
      posX: '60px',
      posY: '70px'
    },
    {
      name: 'SCSS',
      description: 'sample',
      id: 19,
      posX: '13px',
      posY: '309px'
    },
    {
      name: 'Vue',
      description: 'sample',
      id: 20,
      posX: '10px',
      posY: '110px'
    },
    {
      name: 'NUnit',
      description: 'sample',
      id: 21,
      posX: '5px',
      posY: '190px'
    },
    {
      name: 'EF Core',
      description: 'sample',
      id: 22,
      posX: '170px',
      posY: '57px'
    },
    {
      name: 'Moq',
      description: 'sample',
      id: 23,
      posX: '235px',
      posY: '16px'
    },
    {
      name: 'xUnit',
      description: 'sample',
      id: 24,
      posX: '60px',
      posY: '20px'
    }
  ],
  'top-right': [
    {
      name: 'AWS Glue',
      description: 'sample description',
      id: 25,
      posX: '132px',
      posY: '162px'
    },
    {
      name: 'Snowball',
      description: 'sample description',
      id: 26,
      posX: '217px',
      posY: '50px'
    },
    {
      name: 'Microsoft Azure',
      description: 'sample description',
      id: 27,
      posX: '130px',
      posY: '330px'
    },
    {
      name: 'MongoDB',
      description: 'sample description',
      id: 28,
      posX: '236px',
      posY: '206px'
    },
    {
      name: 'Google Cloud',
      description: 'sample description',
      id: 29,
      posX: '355px',
      posY: '50px'
    },
    {
      name: 'AWS',
      description: 'sample description',
      id: 30,
      posX: '110px',
      posY: '8px'
    },
    {
      name: 'SQL Server',
      description: 'sample description',
      id: 31,
      posX: '60px',
      posY: '201px'
    },
    {
      name: 'DynamoDB',
      description: 'sample description',
      id: 32,
      posX: '95px',
      posY: '79px'
    },
    {
      name: 'PostgreSQL',
      description: 'sample description',
      id: 33,
      posX: '295px',
      posY: '135px'
    },
    {
      name: 'AWS Athena',
      description: 'sample description',
      id: 34,
      posX: '135px',
      posY: '108px'
    }
  ],
  'bottom-left': [
    {
      name: 'Github',
      description: 'sample description',
      id: 35,
      posX: '35px',
      posY: '115px'
    },
    {
      name: 'CircleCI',
      description: 'sample description',
      id: 36,
      posX: '110px',
      posY: '123px'
    },
    {
      name: 'Github Actions',
      description: 'sample description',
      id: 37,
      posX: '216px',
      posY: '162px'
    },
    {
      name: 'Google Currents',
      description: 'sample description',
      id: 38,
      posX: '213px',
      posY: '87px'
    },
    {
      name: 'Google Docs',
      description: 'sample description',
      id: 39,
      posX: '87px',
      posY: '210px'
    },
    {
      name: 'Google Shared Drive',
      description: 'sample description',
      id: 40,
      posX: '273px',
      posY: '111px'
    },
    {
      name: 'Miro',
      description: 'sample description',
      id: 41,
      posX: '163px',
      posY: '245px'
    },
    {
      name: 'Slack',
      description: 'sample description',
      id: 42,
      posX: '85px',
      posY: '55px'
    },
    {
      name: 'Lucidchart',
      description: 'sample description',
      id: 43,
      posX: '294px',
      posY: '53px'
    },
    {
      name: 'Trello',
      description: 'sample description',
      id: 44,
      posX: '311px',
      posY: '15px'
    },
    {
      name: 'draw.io',
      description: 'sample description',
      id: 45,
      posX: '274px',
      posY: '148px'
    },
    {
      name: 'ideaflip',
      description: 'sample description',
      id: 46,
      posX: '195px',
      posY: '226px'
    },
    {
      name: 'Google Calendar',
      description: 'sample description',
      id: 47,
      posX: '248px',
      posY: '195px'
    },
    {
      name: 'Terraform',
      description: 'sample description',
      id: 48,
      posX: '175px',
      posY: '183px'
    },
    {
      name: 'Docker',
      description: 'sample description',
      id: 49,
      posX: '1px',
      posY: '290px'
    },
    {
      name: 'Jira',
      description: 'sample description',
      id: 50,
      posX: '168px',
      posY: '113px'
    },
    {
      name: 'Bootstrap',
      description: 'sample description',
      id: 51,
      posX: '214px',
      posY: '201px'
    },
    {
      name: 'Azure',
      description: 'sample description',
      id: 52,
      posX: '128px',
      posY: '294px'
    },
    {
      name: 'Chrome DevTools',
      description: 'sample description',
      id: 53,
      posX: '99px',
      posY: '325px'
    },
    {
      name: 'Atom',
      description: 'sample description',
      id: 54,
      posX: '18px',
      posY: '230px'
    },
    {
      name: 'Visual Studio Code',
      description: 'sample description',
      id: 55,
      posX: '55px',
      posY: '202px'
    },
    {
      name: 'DbSchema',
      description: 'sample description',
      id: 56,
      posX: '-33px',
      posY: '185px'
    },
    {
      name: 'Postman',
      description: 'sample description',
      id: 57,
      posX: '229px',
      posY: '120px'
    },
    {
      name: 'Heroku',
      description: 'sample description',
      id: 58,
      posX: '55px',
      posY: '10px'
    },
    {
      name: 'Swagger',
      description: 'sample description',
      id: 59,
      posX: '130px',
      posY: '155px'
    },
    {
      name: 'AWS Cloud',
      description: 'sample description',
      id: 60,
      posX: '240px',
      posY: '65px'
    },
    {
      name: 'Homebrew',
      description: 'sample description',
      id: 61,
      posX: '60px',
      posY: '160px'
    },
    {
      name: 'gitHub Desktop',
      description: 'sample description',
      id: 62,
      posX: '175px',
      posY: '23px'
    },
    {
      name: 'Docker',
      description: 'sample description',
      id: 63,
      posX: '65px',
      posY: '255px'
    },
    {
      name: 'TablePlus',
      description: 'sample description',
      id: 64,
      posX: '236px',
      posY: '22px'
    },
    {
      name: 'Live Share',
      description: 'sample description',
      id: 65,
      posX: '48px',
      posY: '320px'
    },
    {
      name: 'Bookmarks',
      description: 'sample description',
      id: 66,
      posX: '125px',
      posY: '249px'
    },
    {
      name: 'Netlify',
      description: 'sample description',
      id: 67,
      posX: '137px',
      posY: '217px'
    },
    {
      name: 'Wordpress',
      description: 'sample description',
      id: 68,
      posX: '1px',
      posY: '110px'
    },
    {
      name: 'DBeaver',
      description: 'sample description',
      id: 69,
      posX: '135px',
      posY: '55px'
    },
    {
      name: 'Visual Studio',
      description: 'sample description',
      id: 70,
      posX: '5px',
      posY: '25px'
    },
    {
      name: 'Dynamic CRM 365',
      description: 'sample description',
      id: 71,
      posX: '231px',
      posY: '241px'
    },
    {
      name: 'CRM 2011',
      description: 'sample description',
      id: 72,
      posX: '193px',
      posY: '139px'
    }
  ],
  'bottom-right': [
    {
      name: 'AWS Appstream',
      description: 'sample description',
      id: 73,
      posX: '220px',
      posY: '103px'
    },
    {
      name: 'AWS EC2',
      description: 'sample description',
      id: 74,
      posX: '240px',
      posY: '57px'
    },
    {
      name: 'AWS Parameter Store',
      description: 'sample description',
      id: 75,
      posX: '80px',
      posY: '2px'
    },
    {
      name: 'AWS Snowball',
      description: 'sample description',
      id: 76,
      posX: '90px',
      posY: '207px'
    },
    {
      name: 'AWS Fargate',
      description: 'sample description',
      id: 77,
      posX: '160px',
      posY: '160px'
    },
    {
      name: 'AWS RDS',
      description: 'sample description',
      id: 78,
      posX: '182px',
      posY: '57px'
    },
    {
      name: 'AWS SSM',
      description: 'sample description',
      id: 79,
      posX: '218px',
      posY: '239px'
    },
    {
      name: 'AWS Secrets Manager',
      description: 'sample description',
      id: 80,
      posX: '100px',
      posY: '128px'
    },
    {
      name: 'AWS IAM',
      description: 'sample description',
      id: 81,
      posX: '258px',
      posY: '180px'
    },
    {
      name: 'AWS Amplify',
      description: 'sample description',
      id: 82,
      posX: '56px',
      posY: '56px'
    },
    {
      name: 'Amazon API Gateway',
      description: 'sample description',
      id: 83,
      posX: '53px',
      posY: '145px'
    },
    {
      name: 'AWS Code Build',
      description: 'sample description',
      id: 84,
      posX: '204px',
      posY: '295px'
    },
    {
      name: 'AWS Code Commit',
      description: 'sample description',
      id: 85,
      posX: '80px',
      posY: '320px'
    },
    {
      name: 'Amazon Cloudwatch',
      description: 'sample description',
      id: 86,
      posX: '308px',
      posY: '137px'
    },
    {
      name: 'Amazin EventBridge',
      description: 'sample description',
      id: 87,
      posX: '295px',
      posY: '205px'
    },
    {
      name: 'AWS Cloudfront',
      description: 'sample description',
      id: 88,
      posX: '138px',
      posY: '90px'
    },
    {
      name: 'AWS Session Manager',
      description: 'sample description',
      id: 89,
      posX: '136px',
      posY: '212px'
    },
    {
      name: 'AWS Step functions',
      description: 'sample description',
      id: 90,
      posX: '63px',
      posY: '222px'
    },
    {
      name: 'AWS SNS',
      description: 'sample description',
      id: 91,
      posX: '282px',
      posY: '10px'
    },
    {
      name: 'AWS SQS',
      description: 'sample description',
      id: 92,
      posX: '206px',
      posY: '153px'
    },
    {
      name: 'AWS Cloudformation',
      description: 'sample description',
      id: 93,
      posX: '161px',
      posY: '260px'
    },
    {
      name: 'AWS Data Migration Service (DMS)',
      description: 'sample description',
      id: 94,
      posX: '286px',
      posY: '243px'
    },
    {
      name: 'AWS ECS',
      description: 'sample description',
      id: 95,
      posX: '242px',
      posY: '270px'
    },
    {
      name: 'AWS ECR',
      description: 'sample description',
      id: 96,
      posX: '347px',
      posY: '44px'
    },
    {
      name: 'AWS DynamoDB',
      description: 'sample description',
      id: 97,
      posX: '150px',
      posY: '8px'
    },
    {
      name: 'AWS DocumentDB',
      description: 'sample description',
      id: 98,
      posX: '184px',
      posY: '105px'
    }
  ]
}
