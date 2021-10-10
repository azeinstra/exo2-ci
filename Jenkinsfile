pipeline {
    agent {
        docker {image 'node:14-alpine'}
    }

    stages {
        stage('Build') {
            steps {
                sh 'node --version'
                sh 'npm install'
                sh 'npm run build'
                sh 'test -f public/index.html'
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