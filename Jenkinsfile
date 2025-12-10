pipeline {
    agent { label 'ec2-agent' }

    stages {

        stage('Verify Agent') {
            steps {
                sh '''
                hostname
                whoami
                node -v
                npm -v
                '''
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
                    sh '''
                    pkill node || true
                    nohup node server.js > app.log 2>&1 &
                    '''
                }
            }
        }
    }
}
