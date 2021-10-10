pipeline {
    agent {
        docker {
            image 'node:14-alpine'
            args '-u root:root'
            }
    }

    stages {
        stage('Build') {
            steps {
                sh 'apk add --update nodejs nodejs-npm'
                sh 'npm install'
                sh 'npm run build'
                sh 'test -f public/index.html'
                sh 'make'
                archiveArtifacts artifacts: 'public/*', fingerprint: true 

            }
        }
        
        stage('Run') {
            steps {
                sh 'echo "coucou"'   
            }
        }

        stage('Deploy staging') {
            steps {
                sh 'echo "coucou"'
            }
        }

        stage('Deploy deployment') {
            steps {
                sh 'echo "coucou"'
            }
        }
    }
}