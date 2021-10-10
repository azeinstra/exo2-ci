pipeline {

    stages {
        stage('Build') {
            agent {
                docker {image 'node:14-alpine'}
            }
            steps {
                sh 'node --version'
                sh 'npm install'
                sh 'npm run build'
                sh 'test -f public/index.html'
            }
        }
        
        stage('Run') {
            agent {
                docker {image 'node:14-alpine'}
            }
            steps {
                sh 'echo "coucou"'   
            }
        }

        stage('Test') {
            agent {
                docker {image 'node:14-alpine'}
            }
            steps {
                sh 'echo "coucou"'
            }
        }

    }
}