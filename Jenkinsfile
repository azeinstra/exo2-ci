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

            }
        }

        stage('Deploy staging') {
            steps {
                sh 'echo "Deploy to" ${STAGING_DOMAIN}'
                sh 'npm install -g surge'
                sh 'surge --project public --domain ${STAGING_DOMAIN}'
            }
        }

        stage('Deploy to prod') {
            steps {
                input "Deploy to prod ?"
                sh 'echo "Deploy to" $PRODUCTION_DOMAIN'
                sh 'surge --project public --domain $PRODUCTION_DOMAIN'
            }
        }
    }
}