const INITIAL_DOT_DATA = {
  'top-left': [
    { name: 'C# - .Net Core', description: 'sample', id: 1 },
    { name: 'Javascript', description: 'sample', id: 2 },
    { name: 'React JS', description: 'sample', id: 3 },
    { name: 'SQL', description: 'sample', id: 4 },
    { name: 'HTML', description: 'sample', id: 5 },
    { name: 'CSS', description: 'sample', id: 6 },
    { name: 'Kotlin', description: 'sample', id: 7 },
    { name: 'Spring Boot', description: 'sample', id: 8 },
    { name: 'TypeScript', description: 'sample', id: 9 },
    { name: 'React', description: 'sample', id: 10 },
    { name: 'Redux', description: 'sample', id: 11 },
    { name: 'Next.js', description: 'sample', id: 12 },
    { name: 'Node.js', description: 'sample', id: 13 },
    { name: 'Ruby On Rails', description: 'sample', id: 14 },
    { name: 'EJS', description: 'sample', id: 15 },
    { name: 'HCL', description: 'sample', id: 16 },
    { name: 'PHP', description: 'sample', id: 17 },
    { name: 'Python', description: 'sample', id: 18 },
    { name: 'SCSS', description: 'sample', id: 19 },
    { name: 'Vue', description: 'sample', id: 20 },
    { name: 'NUnit', description: 'sample', id: 21 },
    { name: 'EF Core', description: 'sample', id: 22 },
    { name: 'Moq', description: 'sample', id: 23 },
    { name: 'xUnit', description: 'sample', id: 24 }
  ],
  'top-right': [
    { name: 'AWS Glue', description: 'sample description', id: 25 },
    { name: 'Snowball', description: 'sample description', id: 26 },
    {
      name: 'Microsoft Azure',
      description: 'sample description',
      id: 27
    },
    { name: 'MongoDB', description: 'sample description', id: 28 },
    { name: 'Google Cloud', description: 'sample description', id: 29 },
    { name: 'AWS', description: 'sample description', id: 30 },
    { name: 'SQL Server', description: 'sample description', id: 31 },
    { name: 'DynamoDB', description: 'sample description', id: 32 },
    { name: 'PostgreSQL', description: 'sample description', id: 33 },
    { name: 'AWS Athena', description: 'sample description', id: 34 }
  ],
  'bottom-left': [
    { name: 'Github', description: 'sample description', id: 35 },
    { name: 'CircleCI', description: 'sample description', id: 36 },
    {
      name: 'Github Actions',
      description: 'sample description',
      id: 37
    },
    {
      name: 'Google Currents',
      description: 'sample description',
      id: 38
    },
    { name: 'Google Docs', description: 'sample description', id: 39 },
    {
      name: 'Google Shared Drive',
      description: 'sample description',
      id: 40
    },
    { name: 'Miro', description: 'sample description', id: 41 },
    { name: 'Slack', description: 'sample description', id: 42 },
    { name: 'Lucidchart', description: 'sample description', id: 43 },
    { name: 'Trello', description: 'sample description', id: 44 },
    { name: 'draw.io', description: 'sample description', id: 45 },
    { name: 'ideaflip', description: 'sample description', id: 46 },
    {
      name: 'Google Calendar',
      description: 'sample description',
      id: 47
    },
    { name: 'Terraform', description: 'sample description', id: 48 },
    { name: 'Docker', description: 'sample description', id: 49 },
    { name: 'Jira', description: 'sample description', id: 50 },
    { name: 'Bootstrap', description: 'sample description', id: 51 },
    { name: 'Azure', description: 'sample description', id: 52 },
    {
      name: 'Chrome DevTools',
      description: 'sample description',
      id: 53
    },
    { name: 'Atom', description: 'sample description', id: 54 },
    {
      name: 'Visual Studio Code',
      description: 'sample description',
      id: 55
    },
    { name: 'DbSchema', description: 'sample description', id: 56 },
    { name: 'Postman', description: 'sample description', id: 57 },
    { name: 'Heroku', description: 'sample description', id: 58 },
    { name: 'Swagger', description: 'sample description', id: 59 },
    { name: 'AWS Cloud', description: 'sample description', id: 60 },
    { name: 'Homebrew', description: 'sample description', id: 61 },
    {
      name: 'gitHub Desktop',
      description: 'sample description',
      id: 62
    },
    { name: 'Docker', description: 'sample description', id: 63 },
    { name: 'TablePlus', description: 'sample description', id: 64 },
    { name: 'Live Share', description: 'sample description', id: 65 },
    { name: 'Bookmarks', description: 'sample description', id: 66 },
    { name: 'Netlify', description: 'sample description', id: 67 },
    { name: 'Wordpress', description: 'sample description', id: 68 },
    { name: 'DBeaver', description: 'sample description', id: 69 },
    {
      name: 'Visual Studio',
      description: 'sample description',
      id: 70
    },
    {
      name: 'Dynamic CRM 365',
      description: 'sample description',
      id: 71
    },
    { name: 'CRM 2011', description: 'sample description', id: 72 }
  ],
  'bottom-right': [
    {
      name: 'AWS Appstream',
      description: 'sample description',
      id: 73
    },
    { name: 'AWS EC2', description: 'sample description', id: 74 },
    {
      name: 'AWS Parameter Store',
      description: 'sample description',
      id: 75
    },
    { name: 'AWS Snowball', description: 'sample description', id: 76 },
    { name: 'AWS Fargate', description: 'sample description', id: 77 },
    { name: 'AWS RDS', description: 'sample description', id: 78 },
    { name: 'AWS SSM', description: 'sample description', id: 79 },
    {
      name: 'AWS Secrets Manager',
      description: 'sample description',
      id: 80
    },
    { name: 'AWS IAM', description: 'sample description', id: 81 },
    { name: 'AWS Amplify', description: 'sample description', id: 82 },
    {
      name: 'Amazon API Gateway',
      description: 'sample description',
      id: 83
    },
    {
      name: 'AWS Code Build',
      description: 'sample description',
      id: 84
    },
    {
      name: 'AWS Code Commit',
      description: 'sample description',
      id: 85
    },
    {
      name: 'Amazon Cloudwatch',
      description: 'sample description',
      id: 86
    },
    {
      name: 'Amazin EventBridge',
      description: 'sample description',
      id: 87
    },
    {
      name: 'AWS Cloudfront',
      description: 'sample description',
      id: 88
    },
    {
      name: 'AWS Session Manager',
      description: 'sample description',
      id: 89
    },
    {
      name: 'AWS Step functions',
      description: 'sample description',
      id: 90
    },
    { name: 'AWS SNS', description: 'sample description', id: 91 },
    { name: 'AWS SQS', description: 'sample description', id: 92 },
    {
      name: 'AWS Cloudformation',
      description: 'sample description',
      id: 93
    },
    {
      name: 'AWS Data Migration Service (DMS)',
      description: 'sample description',
      id: 94
    },
    { name: 'AWS ECS', description: 'sample description', id: 95 },
    { name: 'AWS ECR', description: 'sample description', id: 96 },
    { name: 'AWS DynamoDB', description: 'sample description', id: 97 },
    {
      name: 'AWS DocumentDB',
      description: 'sample description',
      id: 98
    }
  ]
}

export default INITIAL_DOT_DATA;
