pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

         stage('Install Dependencies') {
            steps {
                // Install Node.js and npm (if not already installed)
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                // Run your React project's test script (adjust the script as per your project setup)
                sh 'npm test'
            }
        }
    }

    post {
        always {
            // Archive the HTML report in the 'Demo/target/surefire-reports' directory
            archiveArtifacts 'demo/target/site/**/*.html'
        }
    }
}
