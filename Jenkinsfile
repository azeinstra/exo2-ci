pipeline {
    agent {
        docker {
            image 'node:lts-buster-slim'
            args '-p 3000:3000'
            }
    }

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
                sh 'test -f public/index.html'
                // sh 'make'
                // archiveArtifacts artifacts: 'public/*', fingerprint: true 

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