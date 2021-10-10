pipeline {
    agent {
        docker {
            image 'node:14-alpine'
            args '-u root:root'
            }
    }

    environment {
        STAGING_DOMAIN = 'chris-todobem-staging.surge.sh'
        PRODUCTION_DOMAIN = 'chris-todobem.surge.sh'
    }

    stages {
        stage('Build') {
            steps {
                sh 'apk add --update nodejs nodejs-npm'
                sh 'npm install'
                sh 'npm run build'
                sh 'test -f public/index.html'
                // sh 'make'
                // archiveArtifacts artifacts: 'public/*', fingerprint: true 

            }
        }
        
        // stage('Test artifacts') {
        //     steps {
        //         sh 'grep "Bravo" public/index.html'   
        //     }
        // }

        stage('Deploy staging') {
            steps {
                sh 'echo "Deploy to" ${STAGING_DOMAIN}'
                sh 'npm install -g surge'
                sh 'surge --project public --domain ${STAGING_DOMAIN}'
            }
        }

        // stage('Deploy deployment') {
        //     steps {
        //         sh 'echo "coucou"'
        //     }
        // }
    }
}