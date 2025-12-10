pipeline {
    agent { label 'ec2-agent' }

    stages {
        stage('Verify Agent') {
            steps {
                sh 'hostname'
                sh 'whoami'
                sh 'java -version'
            }
        }

        stage('Install Backend') {
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
