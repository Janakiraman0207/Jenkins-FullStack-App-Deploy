pipeline {
    agent any

    stages {

        stage('Install') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Run App') {
            steps {
                dir('backend') {
                    sh 'pkill node || true'
                    sh 'nohup node server.js > app.log 2>&1 &'
                }
            }
        }

    }
}
