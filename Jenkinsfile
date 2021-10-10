pipeline {
    agent {
        docker {image 'node:14-alpine'}
    }

    stages {
        stage('Build') {
            steps {
                sh 'node --version'

            }
        }
        
        stage('Run') {
            steps {
                sh 'echo "coucou"'   
            }
        }

        stage('Test') {
            steps {
                sh 'echo "coucou"'
            }
        }

    }
}