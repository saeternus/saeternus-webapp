/**
 * TODO: Implement API calls when backend is setup
 */

import { CourseDetails, CourseInfo } from './course.types';
import { slugify } from '@/lib/utils';

const courses: CourseInfo[] = [
  {
    courseId: '1',
    title: 'GIS Certification',
    header: 'Certificate Course in Geographical Information System (GIS)',
    image: '/assets/gis.png',
    tags: ['GIS', 'Mapping'],
    prevPrice: '₹7,000',
    currentPrice: '₹3,540',
    path: 'gis',
  },
  {
    courseId: '2',
    title: 'SPSS Certification',
    header:
      'Certificate Course in Statistical Package for the Social Sciences (SPSS)',
    image: '/assets/spss.png',
    tags: ['SPSS', 'Statistics', 'Analysis'],
    prevPrice: '₹7,375',
    currentPrice: '₹2,950',
    path: 'spss',
  },
  {
    courseId: '3',
    title: 'Python Data Analysis Certification',
    header: 'Certificate Course in Python - Data Analysis and Visualisation',
    image: '/assets/python.png',
    tags: ['Python', 'Analysis', 'Visualization'],
    prevPrice: '₹7,375',
    currentPrice: '₹2,950',
    path: 'python-data-analysis-visualisation',
  },
  {
    courseId: '4',
    title: 'Remote Sensing Certification',
    header: 'Certificate Course in Remote Sensing',
    image: '/assets/RemoteSensing.png',
    tags: ['Remote Sensing', 'Observation'],
    prevPrice: '₹10,700',
    currentPrice: '₹2,990',
    path: 'remote-sensing',
  },
  {
    courseId: '5',
    title: 'Research Methodology - Research Design and Writing',
    header:
      'Certificate Course in Research Methodology - Research Design and Writing',
    image: '/assets/ResearchDesignWriting.png',
    tags: ['Research Methodology', 'Writing'],
    prevPrice: '₹8,200',
    currentPrice: '₹2,950',
    path: 'research-methodology-research-design-and-writing',
  },
  {
    courseId: '6',
    title: 'Research Methodology Data Collection and Analysis',
    header:
      'Certificate Course in Research Methodology - Data Collection and Analysis',
    image: '/assets/ResearchMethodology.png',
    tags: ['Research Methodology', 'Analysis'],
    prevPrice: '₹8,200',
    currentPrice: '₹2,950',
    path: 'research-methodology-data-collection-and-analysis',
  },
  {
    courseId: '7',
    title: 'Remote Sensing and GIS Project',
    header: 'Research Project in Remote Sensing and GIS',
    image: '/assets/RemoteSensingGIS.png',
    tags: ['Remote Sensing', 'Project'],
    prevPrice: '₹9,600',
    currentPrice: '₹2,596',
    path: 'remote-sensing-gis-project',
  },
];

const detailedCourses: CourseDetails[] = [
  {
    courseId: '1',
    title: 'Certificate Course in Geographical Information System (GIS)',
    description:
      'Emerging technologies such as GIS (Geographic Information System) and RS (Remote Sensing) are instrumental in addressing intricate global challenges and impacting various aspects of life. In this context, the role of a Geospatial expert is gaining significance in the decision-making process. Acquiring practical knowledge is essential to comprehensively grasp the underlying concepts and unlock the potential for innovative applications of these technologies across diverse domains.',

    image: '/assets/gis.png',
    tags: ['GIS', 'Geospatial', 'Mapping'],
    prevPrice: '₹7,000',
    currentPrice: '₹3,540',
    whatsapp: 'https://chat.whatsapp.com/ItD3hpp9F7O5BfU8LA8s6T',
    contact: '9450906849',
    formLink: 'https://forms.gle/2KLbzK9qmT7mr59j7',
    path: 'gis',
    lessons: [
      {
        title: 'Introduction to GIS',
        description:
          'Overview, A Brief History of GIS, Essential Components of GIS, Software Installation',
        day: 'Day 1',
      },
      {
        title: 'GIS Basics I',
        description: 'GIS System, Projection System, Hands on Practice',
        day: 'Day 2',
      },
      {
        title: 'GIS Basics II',
        description:
          'Geodatabase Preparation, Type of GIS Layers, Hands on Practice',
        day: 'Day 3',
      },
      {
        title: 'GIS Basics III',
        description:
          'Georeferencing of Vector, Georeferencing of Raster, Projection Transformation, Hands on Practice',
        day: 'Day 4',
      },
      {
        title: 'GIS Layer Editing',
        description:
          'Digitisation of Point, Line and Polygon, Filling Attributes, Attribute Joining, Area and Perimeter Calculation, Calculations in Attributes, Hands on Practice',
        day: 'Day 5',
      },
      {
        title: 'Data Management Tools',
        description:
          'Vector Operations in GIS Platform, ArcGIS-Clip Management and Mosaic, Raster and Vector Data Clipping, Making Sample Location with GPS Location, Hands on Practice',
        day: 'Day 6',
      },
      {
        title: 'Spatial Analyst I',
        description:
          'Extraction by points, Extraction by mask, Maths tools, Reclassify, Hands on Practice',
        day: 'Day 7',
      },
      {
        title: 'Spatial Analyst II',
        description: 'Condition, Interpolation, Hands on Practice',
        day: 'Day 8',
      },
      {
        title: 'Spatial Analyst III',
        description: 'Hydrology Tool, Raster Calculator, Hands on Practice',
        day: 'Day 9',
      },
      {
        title: 'Spatial Analyst IV',
        description:
          'Zonal Stats, Table Calculation, Rater & Vector Analysis, Hands on Practice',
        day: 'Day 10',
      },
      {
        title: 'Use cases of tools',
        description:
          'Watershed analysis, Contour preparation, Slope, Aspect and Hill Shade analysis, Hands on Practice',
        day: 'Day 11',
      },
      {
        title: 'Query Builder',
        description: 'Query Algorithm, Writing an equation, Hands on Practice',
        day: 'Day 12',
      },
      {
        title: 'Hands on Practise of Vector Analysis',
        description: 'Case Study for LULC Change',
        day: 'Day 13',
      },
      {
        title: 'Hands on Practise of Raster Analysis',
        description: 'Case study for Change Detection',
        day: 'Day 14',
      },
      {
        title: 'Map Preparation and Data Export',
        description:
          'Scale Fixing, North Direction, Annotation, Exporting Map, Hands on Practice',
        day: 'Day 15',
      },
      {
        title: 'GIS Open-Source Platform',
        description:
          'Q GIS, Vector Operation, Raster Operation, GIS analysis, Map Preparation, Hands on Practice',
        day: 'Day 16',
      },
    ],
    relatedCourses: ['2', '5'],
    startDate: '2024-09-10',
    whatYouWillLearn: [
      'Mastering React.js fundamentals',
      'Building reusable components',
      'Managing state and props efficiently',
      'Implementing routing and navigation',
      'Exploring advanced React features like Hooks and Context API',
    ],
    courseMeta: [
      {
        title: 'Duration',
        description: '8 weeks',
        image: '/assets/react-duration.png',
      },
      {
        title: 'Level',
        description: 'Beginner',
        image: '/assets/intermediate-level.png',
      },
      {
        title: 'Certification',
        description: 'Upon successful completion',
        image: '/assets/certification.png',
      },
      {
        title: 'Language',
        description: 'English and Hindi',
        image: '/assets/instructor.png',
      },
      {
        title: 'Instructor',
        description: 'Leading industry experts',
        image: '/assets/instructor.png',
      },
      {
        title: 'Prerequisites',
        description: 'No prerequisites required',
        image: '/assets/prerequisites.png',
      },
      {
        title: 'Projects',
        description: 'Hands-on projects to reinforce learning concepts',
        image: '/assets/projects.png',
      },
      {
        title: 'Community',
        description:
          'Access to an exclusive online community for discussions and support',
        image: '/assets/community.png',
      },
    ],
    keywords: [
      'Geographical Information system',
      'GIS System',
      'Projection System',
      'Geodatabase',
      'GIS Layers',
      'Georeferencing',
      'Projection Transformation',
      'Digitisation',
      'Attribute',
      'ArcGIS',
      'Clip Management',
      'Mosaic',
      'Raster Calculator',
      'Table Calculation',
      'Rater & Vector Analysis',
      'Query Builder',
      'Change Detection',
      'Map Preparation',
      'Q GIS',
      'Vector Operation',
      'Raster Operation',
      'GIS analysis',
      'Remote Sensing',
      'Geo spatial technology',
      'Geoinformatics',
      'GPS',
    ],
  },
  {
    courseId: '2',
    title:
      'Certificate Course in Statistical Package for the Social Sciences (SPSS)',
    description:
      'Data analysis is one of the most flourishing fields right now as businesses around the world are trying to make sense of their data. However, there are several data analysis tools available in the market, but SPSS is a suite of software programs that analyses scientific data related to the social sciences. It offers a fast-visual modelling environment that ranges from the smallest to the most complex models. SPSS is designed to accommodate a wide variety of variable data formats, including Excel, CSV, SAS, and Stata data files. The data obtained from SPSS is used for surveys, data mining, market research, etc. SPSS training enables you to master all the essential concepts of SPSS for performing data analysis and statistics through hands-on exposure to industry use cases.',
    image: '/assets/spss.png',
    tags: ['SPSS', 'Statistics', 'Analysis'],
    prevPrice: '₹7,375',
    currentPrice: '₹2,950',
    whatsapp: 'https://chat.whatsapp.com/FdbSxmUWe4yJTVNQvV1zZ2',
    contact: '9450906849',
    formLink: 'https://forms.gle/EMas47VcUmrUctK78',
    path: 'spss',
    lessons: [
      {
        title: 'Introduction to Statistics & SPSS',
        day: 'Day 1',
        description:
          'Why Study Statistics, Types of Data, Types of Variables, Types of Statistics, SPSS Environment: Data View & Variable View, Hands on Practice.',
      },
      {
        title: 'Descriptive Statistics',
        day: 'Day 2',
        description:
          'Measures of Central Tendency: Mean; Median; Mode; Measures of Partitions: Quartile; Decile; Percentile; Dispersion: Range; Mean Deviation; Quartile Deviation; Standard Deviation; Variance; Coefficient of Variation; Graphical Representation: Histogram, Bar Diagram, Pie Chart, Line Graph, Frequency Polygon, and Box & Whiskers Plots; Hands on Practice.',
      },
      {
        title: 'Inferential Statistics',
        day: 'Day 3',
        description:
          'Hypothesis Testing: Null & Alternative Hypothesis; Errors in Hypothesis Testing; Normality Distribution (Discrete vs. Continuous); Measuring Normality (Graphical Methods, Skewness, Kurtosis, Kolmogorov-Smirnov Test, Shapiro-Wilk Test); Hands-on Practice.',
      },
      {
        title: 'Parametric Tests-I',
        day: 'Day 4',
        description:
          'Parametric Tests: One Sample (Z-Test/Normal Test), Two Sample (Z-Test/Normal Test, Student t-Test, Modified t-Test), More Than Two Samples (Paired t-Test); Hands-on Practice.',
      },
      {
        title: 'Parametric Tests-II',
        day: 'Day 5',
        description:
          'ANOVA Family: ANOVA, ANCOVA, MANOVA, MANCOVA; Hands-on Practice.',
      },
      {
        title: 'Non-Parametric Tests-I',
        day: 'Day 6',
        description:
          'Non-parametric Tests: One Sample (Sign Test, Wilcoxon Signed-Rank Test), Two Samples (Mann-Whitney U Test), More Than Two Samples (Note: Not recommended for more than two samples, consider Kruskal-Wallis test instead); Hands-on Practice.',
      },
      {
        title: 'Non-Parametric Tests-II',
        day: 'Day 7',
        description:
          'Non-parametric Tests (continued): Kruskal-Wallis H Test, Friedman Test, Run Test, McNemar Test; Hands-on Practice.',
      },
      {
        title: 'Qualitative Data Analysis',
        day: 'Day 8',
        description:
          'Analysis of Categorical Data: Cross Tabulation; Chi-Square Test of Association; Kappa Statistics; Hands-on Practice.',
      },
      {
        title: 'Correlation',
        day: 'Day 9',
        description:
          'Correlation Analysis: Pearson Correlation, Spearman Rank Correlation, Correlation Matrix; Hands-on Practice.',
      },
      {
        title: ' Regression',
        day: 'Day 10',
        description:
          'Linear Regression: Simple Regression, Multiple Regression; Hands-on Practice.',
      },
      {
        title: 'Logistic Regression',
        day: 'Day 11',
        description:
          'Logistic Regression: Bivariate, Ordinal; Hands-on Practice.',
      },
      {
        title: 'Cluster Analysis',
        day: 'Day 12',
        description:
          'Hierarchical Clustering, K-Means Clustering; Hands-on Practice.',
      },
      {
        title: 'Principal Component & Factor Analysis',
        day: 'Day 13',
        description:
          'Dimensionality Reduction: Principal Component Analysis (PCA), Factor Analysis; Hands-on Practice.',
      },
      {
        title: 'Discriminant Analysis',
        day: 'Day 14',
        description: 'Discriminant Function Analysis; Hands-on Practice.',
      },
      {
        title: 'Survival Analysis',
        day: 'Day 15',
        description: 'Survival Analysis; Hands-on Practice.',
      },
      {
        title: 'Case Studies Discussion',
        day: 'Day 16',
        description: 'Multiple Case Studies; Hands-on Practice.',
      },
    ],
    startDate: '2024-09-23',
    whatYouWillLearn: [
      'Descriptive Statistics - It includes methodologies such as cross-tabulation, frequencies, and descriptive ratio statistics.',
      'Bivariate Statistics - It includes methodologies such as means, nonparametric tests, correlation, and Analysis of Variance (ANOVA).',
      'Predicting numeral outcomes such as linear regression.',
      'Methodologies such as cluster analysis and factor analysis which is great for predicting for identifying groups.',
      'Numerous chart and graph options for visualizing data patterns, such as histograms, bar charts, and scatter plots.',
      'Government entities, educational institutions, survey companies, market researchers, marketing organizations, health researchers, data miners, and many others use it for analysing survey data. It is popular in academic, scientific, and applied research environments.',
    ],
    courseMeta: [
      {
        title: 'Duration',
        description: '8 weeks',
        image: '/assets/node-duration.png',
      },
      {
        title: 'Level',
        description: 'Beginner',
        image: '/assets/intermediate-level.png',
      },
      {
        title: 'Certification',
        description: 'Upon successful completion',
        image: '/assets/certification.png',
      },
      {
        title: 'Language',
        description: 'English',
        image: '/assets/instructor.png',
      },
      {
        title: 'Instructor',
        description: 'Leading industry experts',
        image: '/assets/instructor.png',
      },
      {
        title: 'Prerequisites',
        description:
          'No prequisites required. Basic understanding of statistics is recommended',
        image: '/assets/prerequisites.png',
      },
      {
        title: 'Projects',
        description:
          'Building real-world projects to reinforce learning concepts',
        image: '/assets/projects.png',
      },
      {
        title: 'Community',
        description:
          'Access to a dedicated online community for discussions and support',
        image: '/assets/community.png',
      },
    ],
    keywords: [
      'SPSS',
      'Statistics',
      'Analysis',
      'Data',
      'Regression',
      'Types of Variables',
      'Descriptive Statistics',
      'Hypothesis',
      'Normality Distribution',
      'Skewness',
      'Kurtosis',
      'Central Tendency',
      'Measures of Partitions',
      'Dispersion',
      'Standard Deviation',
      'Coefficient of Variation',
      'Inferential Statistics',
      'Kolmogorov-Smirnov Test',
      'Shapiro-Wilk Test',
      'Parametric Tests',
      'Z Test',
      "Student's t Test",
      'Modified t Test',
      'Paired t Test',
      'ANOVA',
      'ANCOVA',
      'MANOVA',
      'MANCOVA',
      'Non-Parametric Tests',
      'Sign Test',
      'Wilcoxon Signed-Rank Test',
      'Mann-Whitney U Test',
      'Kruskal-Wallis H Test',
      'Friedman Test',
      'Runs Test',
      "McNemar's Test",
      'Chi-Square Test',
      'Kappa Statistics',
      'Correlation',
      "Pearson's Correlation",
      'Spearman Rank Correlation',
      'Logistic Regression',
      'Bivariate Logistic Regression',
      'Ordinal Logistic Regression',
      'Cluster Analysis',
      'Hierarchical Clustering',
      'K-Means Clustering',
      'Principal Component Analysis',
      'Factor Analysis',
      'Discriminant Function Analysis',
      'Survival Analysis',
      'Descriptive Statistics',
      'Hypothesis Testing',
      'ANOVA',
      'Correlation Analysis',
      'Time Series Analysis',
      'Multivariate Analysis',
      'Data Visualization',
    ],
  },
  {
    courseId: '3',
    title: 'Certificate Course in Python - Data Analysis and Visualisation',
    description:
      "Unlock the power of Python for data analysis and visualization in this comprehensive course. From mastering fundamental Python concepts to handling datasets and conducting exploratory data analysis, you'll gain the skills to visualize data effectively. Explore a variety of plots, charts, and statistical techniques, and even delve into geospatial data visualization. Elevate your proficiency in Python and transform raw data into meaningful insights. Join us on this engaging journey of learning and acquire the expertise needed for impactful data-driven decision-making.",
    image: '/assets/python.png',
    tags: ['Python', 'Analysis', 'Visualization'],
    prevPrice: '₹7,375',
    currentPrice: '₹2,950',
    whatsapp: 'https://chat.whatsapp.com/HkrLN4L6LdaGuhj1TqkYWT',
    contact: '9450906849',
    formLink: 'https://forms.gle/GnXUAxDczULkvQQF6',
    path: 'python-data-analysis-visualisation',

    lessons: [
      {
        title:
          'Python - Introduction, variables, constants, strings, lists and maps.',
        day: 'Day 1',
        description:
          'Introduction to Python programming language covering basic concepts like variables, constants, strings, lists, and dictionaries (maps).',
      },
      {
        title: 'Python - conditionals, loops and functions.',
        day: 'Day 2',
        description:
          'Exploration of Python conditionals (if, elif, else), loops (for, while), and functions (defining functions, passing arguments, return values).',
      },
      {
        title: 'Python - classes and packages. How to read documentation?',
        day: 'Day 3',
        description:
          'Understanding Python classes, object-oriented programming (OOP) concepts, and exploring packages. Guidance on effective use of documentation.',
      },
      {
        title:
          'Importing/loading datasets. Data wrangling, preprocessing and cleanup. Handling excel, csv and dataframes.',
        day: 'Day 4',
        description:
          'Practical techniques for importing and handling datasets in Python, including data wrangling, preprocessing, and cleanup tasks with Pandas. Management of Excel, CSV files, and dataframes.',
      },
      {
        title:
          'Exploratory data analysis with pandas and numpy. Basic statistical analysis like mean, median, mode, standard deviation, percentiles etc.',
        day: 'Day 5',
        description:
          'Performing exploratory data analysis (EDA) using Pandas and NumPy libraries. Basic statistical analysis techniques such as mean, median, mode, standard deviation, and percentiles.',
      },
      {
        title:
          'Plotting with matplotlib. Visually appealing visualizations for papers and presentations.',
        day: 'Day 6',
        description:
          'Introduction to Matplotlib for creating visually appealing plots and visualizations suitable for academic papers and presentations.',
      },
      {
        title:
          'Area plots, histograms, bar charts, pie charts, box plots, and scatter plots.',
        day: 'Day 7',
        description:
          'Creating various types of plots including area plots, histograms, bar charts, pie charts, box plots, and scatter plots using Matplotlib and Pandas.',
      },
      {
        title:
          'Classification and regression decision trees. Linear regression, logistic regression.',
        day: 'Day 8',
        description:
          'Introduction to decision trees for classification and regression tasks. Implementing linear regression and logistic regression models in Python.',
      },
      {
        title: 'Handling 3D data. Bubble plots, heatmaps and 3D bar charts.',
        day: 'Day 9',
        description:
          'Techniques for handling and visualizing 3D data including bubble plots, heatmaps, and 3D bar charts using Matplotlib and Pandas.',
      },
      {
        title:
          'Normality, Statistical tests, confidence interval estimates etc.',
        day: 'Day 10',
        description:
          'Understanding normality assumptions, performing statistical tests, and estimating confidence intervals in data analysis using Python.',
      },
      {
        title: 'Visualizing geospatial data with folium.',
        day: 'Day 11',
        description:
          'Using Folium library for visualizing geospatial data and creating interactive maps with Python.',
      },
      {
        title: 'Model evaluation and refinement. Testing.',
        day: 'Day 12',
        description:
          'Methods for evaluating and refining machine learning models. Techniques for testing model performance and effectiveness in Python.',
      },
    ],
    relatedCourses: ['2', '5'],
    startDate: '2024-09-28',
    whatYouWillLearn: [
      'Mastering React.js fundamentals',
      'Building reusable components',
      'Managing state and props efficiently',
      'Implementing routing and navigation',
      'Exploring advanced React features like Hooks and Context API',
    ],
    courseMeta: [
      {
        title: 'Duration',
        description: '6 weeks',
        image: '/assets/react-duration.png',
      },
      {
        title: 'Level',
        description: 'Beginner',
        image: '/assets/intermediate-level.png',
      },
      {
        title: 'Certification',
        description: 'Upon successful completion',
        image: '/assets/certification.png',
      },
      {
        title: 'Language',
        description: 'English and Hindi',
        image: '/assets/instructor.png',
      },
      {
        title: 'Instructor',
        description: 'Leading industry experts',
        image: '/assets/instructor.png',
      },
      {
        title: 'Prerequisites',
        description: 'No prerequisites required',
        image: '/assets/prerequisites.png',
      },
      {
        title: 'Projects',
        description: 'Hands-on projects to reinforce learning concepts',
        image: '/assets/projects.png',
      },
      {
        title: 'Community',
        description:
          'Access to an exclusive online community for discussions and support',
        image: '/assets/community.png',
      },
    ],
    keywords: [
      'Python',
      'Data Analysis',
      'Data Visualization',
      'Pandas',
      'Matplotlib',
      'NumPy',
      'Folium',
      'Seaborn',
      'Plotly',
      'Scikit-learn',
      'Jupyter Notebook',
      'Data Cleaning',
      'Statistical Analysis',
      'Machine Learning',
      'Exploratory Data Analysis',
      'Data Wrangling',
      'Data Mining',
      'Data Transformation',
      'Data Manipulation',
      'Data Modeling',
      'Feature Engineering',
    ],
  },
  {
    courseId: '4',
    title: 'Certificate Course in Remote Sensing',
    description:
      'The Certificate Course in Remote Sensing offers a comprehensive training program, covering essential principles of remote sensing and hands-on experience with relevant software. This course provides practical skills in image processing, classification, and spatial modeling, enabling participants to harness the power of remote sensing data for environmental monitoring, resource management, and GIS applications. ',
    image: '/assets/RemoteSensing.png',
    tags: ['Remote Sensing', 'Observation'],
    prevPrice: '₹10,700',
    currentPrice: '₹2,990',
    whatsapp: 'https://chat.whatsapp.com/C1JrWWEMrbwBp785QnFNVj',
    contact: '9450906849',
    formLink: 'https://forms.gle/4XCdgsjLha6iwnga8',
    path: 'remote-sensing',
    lessons: [
      {
        title: 'Introduction to Remote Sensing',
        day: 'Day 1',
        description:
          'A Short History of Remote Sensing; Introduction to Digital Data; Important Basic Concepts of Remote Sensing; Geographic Concepts',
      },
      {
        title: 'Satellite Image Technology and Basics',
        day: 'Day 2',
        description:
          'The Electromagnetic Spectrum; Passive/Active Sensors; Remote Sensing Sensor Platforms; Analogue Aerial Photography; Digital Imagery; Imagery Types',
      },
      {
        title: 'Software Installation',
        day: 'Day 3',
        description: 'Image Processing Software Installation Demo',
      },
      {
        title: 'Satellite Image Pre Processing-I',
        day: 'Day 4',
        description:
          'Satellite Data Downloading; FCC Preparation; Colour Matching; Hands on Practice',
      },
      {
        title: 'Satellite Image Pre Processing-II',
        day: 'Day 5',
        description: 'Image Pre-Processing; Hands on Practice',
      },
      {
        title: 'Satellite Image Pre Processing-III',
        day: 'Day 6',
        description:
          'Image Referencing and Transformation; Image Mosaics; Hands on Practice',
      },
      {
        title: 'Hands on Practice',
        day: 'Day 7',
        description: 'Hands on Practice for Satellite Image Pre Processing',
      },
      {
        title: 'Image Processing-I',
        day: 'Day 8',
        description: 'Image Enhancement; Hands on Practice',
      },
      {
        title: 'Image Processing-II',
        day: 'Day 9',
        description: 'Image Fusion; Hands on Practice',
      },
      {
        title: 'Image Classification-I',
        day: 'Day 10',
        description:
          'General Introduction; Vector File Creation; Raster File Creation; Hands-on Practice.',
      },
      {
        title: 'Image Classification-II',
        day: 'Day 11',
        description:
          'Digital Classification; Image Classification Unsupervised; Image Classification Supervised; Hands-on Practice.',
      },
      {
        title: 'Image Classification-III',
        day: 'Day 12',
        description:
          'On Screen Visual Interpretation; Change Detection; Vegetation Indices Analysis; Hands-on Practice.',
      },
      {
        title: 'Hands on Practice',
        day: 'Day 13',
        description: 'Hands on Practice for Image Classification',
      },
      {
        title: 'Satellite Image Analysis-I',
        day: 'Day 14',
        description: 'Attribute Formation; Colour Coding; Hands-on Practice.',
      },
      {
        title: 'Satellite Image Analysis-II',
        day: 'Day 15',
        description:
          'Area Calculation; Statistics Generation; Hands-on Practice.',
      },
      {
        title: 'Advanced Technology of Remote Sensing',
        day: 'Day 16',
        description:
          'Brief Description of Optical, Microwave, LiDAR & Hyperspectral Data; Advancement of Microwave, LiDAR and Hyperspectral over Optical Data; Use Cases of Various Aspects of Remote Sensing; UAV (Unmanned Aerial Vehicle).',
      },
    ],
    relatedCourses: ['2', '5'],
    startDate: '2024-09-25',
    whatYouWillLearn: [
      'Mastering React.js fundamentals',
      'Building reusable components',
      'Managing state and props efficiently',
      'Implementing routing and navigation',
      'Exploring advanced React features like Hooks and Context API',
    ],
    courseMeta: [
      {
        title: 'Duration',
        description: '8 weeks',
        image: '/assets/react-duration.png',
      },
      {
        title: 'Level',
        description: 'Beginner',
        image: '/assets/intermediate-level.png',
      },
      {
        title: 'Certification',
        description: 'Upon successful completion',
        image: '/assets/certification.png',
      },
      {
        title: 'Language',
        description: 'English and Hindi',
        image: '/assets/instructor.png',
      },
      {
        title: 'Instructor',
        description: 'Leading industry experts',
        image: '/assets/instructor.png',
      },
      {
        title: 'Prerequisites',
        description: 'No prerequisites required',
        image: '/assets/prerequisites.png',
      },
      {
        title: 'Projects',
        description: 'Hands-on projects to reinforce learning concepts',
        image: '/assets/projects.png',
      },
      {
        title: 'Community',
        description:
          'Access to an exclusive online community for discussions and support',
        image: '/assets/community.png',
      },
    ],
    keywords: [
      'Remote Sensing',
      'Erdas Imagine',
      'Digital Data',
      'Satellite Image Technology',
      'Electromagnetic Spectrum',
      'Sensors',
      'Sensor Platforms',
      'Aerial Photography',
      'Digital Imagery',
      'Image Processing',
      'Satellite Data',
      'FCC',
      'Image Referencing',
      'Image Transformation',
      'Image Mosaics',
      'Image Enhancement',
      'Image Fusion',
      'Image Classification',
      'Vector Data',
      'Raster Data',
      'Digital Classification',
      'Unsupervised Classification',
      'Supervised Classification',
      'Visual Interpretation',
      'Digital Analysis',
      'Optical Data',
      'Microwave Data',
      'LiDAR Data',
      'Hyperspectral Data',
      'Spatial Modeling',
      'UAVs',
      'Geographical Information System',
      'Resolution',
    ],
  },
  {
    courseId: '5',
    title:
      'Certificate Course in Research Methodology - Research Design and Writing',
    description:
      'Embark on a transformative journey into the realm of research methodology. From laying the groundwork with fundamentals and diverse methodologies to navigating the intricacies of formulating hypotheses and writing impactful papers, each class unfolds a new chapter. Delve into practical insights, enhance your writing skills, and master the art of effective presentations. Join us to foster your passion for research and equip yourself with the tools needed for scholarly success.',
    image: '/assets/ResearchDesignWriting.png',
    tags: ['Research Methodology', 'Writing'],
    prevPrice: '₹8,200',
    currentPrice: '₹2,950',
    whatsapp: 'https://chat.whatsapp.com/HLFjC7Usbs12NDdY0pR1fV',
    contact: '9450906849',
    formLink: 'https://forms.gle/EcBkBU18eM3o96S38',
    path: 'research-methodology-research-design-and-writing',
    lessons: [
      {
        title: 'Fundamentals of Research',
        day: 'Day 1',
        description:
          'Importance & Scope; Research: Meaning, Types, Objectives, Characteristics; Positivism and Post Positivism to Research; Introducing the Idea of Research in Social Sciences; Limitation of Research',
      },
      {
        title: 'Research Design',
        day: 'Day 2',
        description:
          'Research Process; Research Designs and Variables; Vectoring and Examples',
      },
      {
        title: 'Research Techniques',
        day: 'Day 3',
        description: 'Various Methods and Techniques of Research.',
      },
      {
        title: 'Research Problem',
        day: 'Day 4',
        description:
          'Formulation of Research Problem; Articulating your Synopsis; How to map the thesis to a claim?',
      },
      {
        title: 'Hypothesis Formulation',
        day: 'Day 5',
        description:
          'Concepts, Types, Sources; Characteristics of a Good Hypothesis; Hypothesis testing and Evaluation Design',
      },
      {
        title: 'Literature Review',
        day: 'Day 6',
        description:
          'How to read a research paper?; Review of Literature; Referencing System',
      },
      {
        title: 'Content Writing I',
        day: 'Day 7',
        description:
          'Precaution in Preparing the Research Report; The Mechanics of Writing: Report, Dissertation, Thesis; Index/Content, Appendix, Footnotes, Endnotes, Use of Diacritical Marks',
      },
      {
        title: 'Content Writing II',
        day: 'Day 8',
        description:
          'Quotation, Citation, Bibliographical References; Drawing Conclusion, Giving Suggestions and Recommendations; Claims and Implied Evaluation',
      },
      {
        title: 'Content Writing III',
        day: 'Day 9',
        description:
          'Writing Abstract, Book Review, Content Writing; Writing and Editing Research Papers; How to Avoid Plagiarism',
      },
      {
        title: 'Research Proposal',
        day: 'Day 10',
        description:
          'Formulation of Research Proposal; How to Ask for Funding/Collaboration?; How to Give a Presentation',
      },
      {
        title: 'Paper Formatting',
        day: 'Day 11',
        description: 'Writing Well-Formatted Papers: LATEX and Overleaf',
      },
      {
        title: 'Use of Internet in Research',
        day: 'Day 12',
        description:
          'Email, Google Scholar, Interaction through Social Networking and Other Channels; How to Showcase your Work on the Web?; Understanding Impact Factor, Citations, H-index etc.',
      },
    ],
    relatedCourses: ['2', '5'],
    startDate: '2024-05-01',
    whatYouWillLearn: [
      'Mastering React.js fundamentals',
      'Building reusable components',
      'Managing state and props efficiently',
      'Implementing routing and navigation',
      'Exploring advanced React features like Hooks and Context API',
    ],
    courseMeta: [
      {
        title: 'Duration',
        description: '6 weeks',
        image: '/assets/react-duration.png',
      },
      {
        title: 'Level',
        description: 'Beginner',
        image: '/assets/intermediate-level.png',
      },
      {
        title: 'Certification',
        description: 'Upon successful completion',
        image: '/assets/certification.png',
      },
      {
        title: 'Language',
        description: 'English and Hindi',
        image: '/assets/instructor.png',
      },
      {
        title: 'Instructor',
        description: 'Leading industry experts',
        image: '/assets/instructor.png',
      },
      {
        title: 'Prerequisites',
        description: 'No prerequisites required',
        image: '/assets/prerequisites.png',
      },
      {
        title: 'Projects',
        description: 'Hands-on projects to reinforce learning concepts',
        image: '/assets/projects.png',
      },
      {
        title: 'Community',
        description:
          'Access to an exclusive online community for discussions and support',
        image: '/assets/community.png',
      },
    ],
    keywords: [
      'Research Methodology',
      'Research Scope',
      'Research Objectives',
      'Philosophical Approaches',
      'Positivism',
      'Post Positivism',
      'Research in Social Sciences',
      'Limitations of Research',
      'Research Design',
      'Writing',
      'Research Process',
      'Variables',
      'Research Techniques',
      'Research Problem',
      'Hypothesis Testing',
      'Evaluation Design',
      'Literature Review',
      'Hypothesis Formulation',
      'Referencing Systems', // Combined referencing terms
      'Content Writing',
      'Research Report',
      'Mechanics of Writing',
      'Academic Writing Formats', // Combined report terms
      'Report',
      'Dissertation',
      'Thesis',
      'Formatting Elements', // Combined index/content terms
      'Index/Content',
      'Appendix',
      'Citations and Notes',
      'Footnotes',
      'Endnotes',
      'Use of Diacritical Marks',
      'Quotation',
      'Citation',
      'Bibliographical References',
      'Drawing Conclusions',
      'Giving Suggestions and Recommendations',
      'Abstract',
      'Book Review',
      'Plagiarism',
      'Research Proposal',
      'Thesis Writing',
      'Academic Writing',
      'Scientific Writing',
      'Research Ethics',
      'Project Planning',
      'Data Analysis',
      'Peer Review',
      'Citation Management',
      'Plagiarism Avoidance',
      'Presentation Skills',
      'Presentation',
      'Paper Formatting',
      'Software for Research',
      'LATEX',
      'Overleaf',
      'Research Resources',
      'Email',
      'Google Scholar',
      'Academic Networking',
      'Social Networking',
      'Research Impact',
      'Impact Factor',
      'Citations',
      'H-index',
    ],
  },
  {
    courseId: '6',
    title:
      'Certificate Course in Research Methodology - Data Collection and Analysis',
    description:
      'Join us to master the intricacies of data collection and analysis in research. Explore the qualities of a researcher, delve into sampling techniques, and design effective questionnaires. Get hands-on with data preprocessing, Python-based exploratory data analysis, and visualization. This course is tailored for students eager to enhance their skills in collecting, processing, and analyzing data for impactful research.',
    image: '/assets/ResearchMethodology.png',
    tags: ['Research Methodology', 'Analysis'],
    prevPrice: '₹8,200',
    currentPrice: '₹2,950',
    whatsapp: 'https://chat.whatsapp.com/HLFjC7Usbs12NDdY0pR1fV',
    contact: '9450906849',
    formLink: 'https://forms.gle/waNVN81LwwTR5Mwh8',
    path: 'research-methodology-data-collection-and-analysis',
    lessons: [
      {
        title: 'Qualities of Researcher',
        day: 'Day 1',
        description:
          'Attitude Measuring and Observation; Importance of Velocity; Preparing your Elevator Pitch',
      },
      {
        title: 'Sampling Design Techniques',
        day: 'Day 2',
        description:
          'Concepts and Types; Selection of Suitable Sampling Techniques; Sampling Size Decision; Sampling Error',
      },
      {
        title: 'Data Types and Sources',
        day: 'Day 3',
        description:
          'Primary and Secondary; Application of Sampling in various types; User Study',
      },
      {
        title: 'Data Collection',
        day: 'Day 4',
        description: 'Designing Questionnaire/Interview Schedule',
      },
      {
        title: 'Data Preprocessing',
        day: 'Day 5',
        description:
          'Data Preparation, Tabulation, Coding and Editing; Graphical Representation and Mapping',
      },
      {
        title: 'Introduction to Python',
        day: 'Day 6',
        description:
          'Exploratory Data Analysis with Python; Handling Large Excel and CSV files Using Open Street Maps',
      },
      {
        title: 'More Python concepts',
        day: 'Day 7',
        description: 'Data Analysis and Visualisation with Python.',
      },
      {
        title: 'Remote Sensing',
        day: 'Day 8',
        description: 'Application of Remote Sensing in Research.',
      },
      {
        title: 'Geographical Information System',
        day: 'Day 9',
        description: 'Application of GIS in Research.',
      },
      {
        title: 'Statistical Techniques',
        day: 'Day 10',
        description: 'Use of Statistical Techniques in Research.',
      },
      {
        title: 'Statistical Package In Social Sciences',
        day: 'Day 11',
        description: 'Data Analysis and Visualisation with SPSS.',
      },
      {
        title: 'Scale Techniques',
        day: 'Day 12',
        description:
          'Concepts, Types, Rating and Ranking Scale; Scale Construction Techniques; Multidimensional Scaling.',
      },
    ],
    relatedCourses: ['2', '5'],
    startDate: '2024-05-01',
    whatYouWillLearn: [
      'Mastering React.js fundamentals',
      'Building reusable components',
      'Managing state and props efficiently',
      'Implementing routing and navigation',
      'Exploring advanced React features like Hooks and Context API',
    ],
    courseMeta: [
      {
        title: 'Duration',
        description: '6 weeks',
        image: '/assets/react-duration.png',
      },
      {
        title: 'Level',
        description: 'Beginner',
        image: '/assets/intermediate-level.png',
      },
      {
        title: 'Certification',
        description: 'Upon successful completion',
        image: '/assets/certification.png',
      },
      {
        title: 'Language',
        description: 'English and Hindi',
        image: '/assets/instructor.png',
      },
      {
        title: 'Instructor',
        description: 'Leading industry experts',
        image: '/assets/instructor.png',
      },
      {
        title: 'Prerequisites',
        description: 'No prerequisites required',
        image: '/assets/prerequisites.png',
      },
      {
        title: 'Projects',
        description: 'Hands-on projects to reinforce learning concepts',
        image: '/assets/projects.png',
      },
      {
        title: 'Community',
        description:
          'Access to an exclusive online community for discussions and support',
        image: '/assets/community.png',
      },
    ],
    keywords: [
      'Research Methodology',
      'Data Collection',
      'Data Analysis',
      'Sampling Techniques',
      'Elevator Pitch',
      'Sampling Design Techniques',
      'Sampling Size',
      'Sampling Error',
      'Data Types',
      'Data Sources',
      'Questionnaire Design',
      'Data Preprocessing',
      'Interview Schedule',
      'Data Tabulation',
      'Data Coding',
      'Data Editing',
      'Data Visualization',
      'Mapping',
      'Python',
      'Remote Sensing',
      'GIS',
      'Data Analysis',
      'Statistical Techniques',
      'SPSS',
      'Statistical Analysis',
      'Survey Design',
      'Data Interpretation',
      'Quantitative Research',
      'Qualitative Research',
      'Data Management',
      'Research Ethics',
      'Scale Development Techniques',
    ],
  },
  {
    courseId: '7',
    title: 'Research Project in Remote Sensing and GIS',
    description:
      'Join us to work on your very own research project or pick from one of our ideas that aligns with your interests. This will involve working with our experts to apply your Remote Sensing and GIS skills to real world case studies. In the end, you get an opportunity to publish a research paper!',
    image: '/assets/RemoteSensingGIS.png',
    tags: ['Remote Sensing', 'Project'],
    prevPrice: '₹9,600',
    currentPrice: '₹2,596',
    whatsapp: 'https://chat.whatsapp.com/CxMeIeJcX5v4NDtE0Inld2',
    contact: '9450906849',
    formLink: 'https://forms.gle/jCB9H6QSXfTuEzSj7',
    path: 'remote-sensing-gis-project',
    lessons: [
      {
        title: 'Topic Discussion',
        description:
          'Identify and finalize research topics; Discuss objectives and scope; Establish research questions and hypotheses.',
        day: 'Day 1',
      },
      {
        title: 'Synopsis Draft',
        description:
          'Create a draft of the research synopsis, outline the methodology and expected outcomes, and review and refine research questions and hypotheses.',
        day: 'Day 2',
      },
      {
        title: 'Data Collection and Cleanup',
        description:
          'Gather necessary data from primary and secondary sources, perform initial data cleaning for accuracy, and organize data for analysis.',
        day: 'Day 3',
      },
      {
        title: 'Data Analysis',
        description:
          'Apply statistical or qualitative analysis methods, interpret results in the context of research questions and hypotheses, and identify patterns, trends, and insights.',
        day: 'Day 4',
      },
      {
        title: 'Data Management',
        description:
          'Review progress with peers or mentors, identify gaps or areas needing further work, and adjust the research plan as necessary.',
        day: 'Day 5',
      },
      {
        title: 'Mapping and Visualisation',
        description:
          'Create visual representations of data (charts, graphs, maps), use tools for effective data visualization, and interpret visual data to support research findings.',
        day: 'Day 6',
      },
      {
        title: 'Presentation',
        description:
          'Prepare a presentation of research findings focusing on key insights and implications, and practice and refine presentation skills.',
        day: 'Day 7',
      },
      {
        title: 'Report Writing',
        description:
          'Compile research findings into a comprehensive report, ensure clarity, coherence, and logical flow, and edit and proofread the final document.',
        day: 'Day 8',
      },
    ],
    relatedCourses: ['2', '5'],
    startDate: '2024-05-01',
    whatYouWillLearn: [
      'Mastering React.js fundamentals',
      'Building reusable components',
      'Managing state and props efficiently',
      'Implementing routing and navigation',
      'Exploring advanced React features like Hooks and Context API',
    ],
    courseMeta: [
      {
        title: 'Duration',
        description: '8 weeks',
        image: '/assets/react-duration.png',
      },
      {
        title: 'Level',
        description: 'Beginner',
        image: '/assets/intermediate-level.png',
      },
      {
        title: 'Certification',
        description: 'Upon successful completion',
        image: '/assets/certification.png',
      },
      {
        title: 'Language',
        description: 'English and Hindi',
        image: '/assets/instructor.png',
      },
      {
        title: 'Instructor',
        description: 'Leading industry experts',
        image: '/assets/instructor.png',
      },
      {
        title: 'Prerequisites',
        description: 'No prerequisites required',
        image: '/assets/prerequisites.png',
      },
      {
        title: 'Projects',
        description: 'Hands-on projects to reinforce learning concepts',
        image: '/assets/projects.png',
      },
      {
        title: 'Community',
        description:
          'Access to an exclusive online community for discussions and support',
        image: '/assets/community.png',
      },
    ],
    keywords: [
      'Research Project',
      'Remote Sensing',
      'GIS',
      'Data Analysis',
      'Remote Sensing & GIS',
      'Research Focus',
      'Research Questions',
      'Hypotheses',
      'Synopsis',
      'Methodology',
      'Expected Outcomes',
      'Data Collection',
      'Primary Data',
      'Secondary Data',
      'Data Management',
      'Organization of Data',
      'Data Analysis',
      'Review Progress',
      'Documentation',
      'Research Plan',
      'Data Visualization',
      'Visual Representations of Data',
      'Mapping',
      'Visualisation',
      'Geospatial Analysis',
      'Earth Observation',
      'Spatial Data',
      'Satellite Imagery',
      'Cartography',
      'Geographic Information Systems',
      'Environmental Monitoring',
      'Spatial Modelling',
      'Dissemination',
      'Research Findings',
      'Presentation',
      'Report Writing',
    ],
  },
];

export function getAllCourses() {
  return courses;
}

export function getCourseInfoById(id: string) {
  return courses.find((course) => course.courseId === id);
}

export function getCourseDetailById(id: string): CourseDetails | undefined {
  const course = detailedCourses.find((course) => course.courseId === id);
  return course;
}

export function getCourseByTitle(title: string): CourseDetails | undefined {
  const course = detailedCourses.find(
    (course) => slugify(course.title) === slugify(title)
  );
  return course;
}
export function getCourseByPath(path: string): CourseDetails | undefined {
  const course = detailedCourses.find((course) => course.path === path);
  return course;
}
