pipeline {
    agent {
        label 'ec2-agent'
    }

    stages {

        stage('Verify Agent') {
            steps {
                sh '''
                  hostname
                  whoami
                  java -version
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
                      echo "Stopping old server if running"
                      pkill -f server.js || true

                      echo "Starting server in background"
                      nohup node server.js > app.log 2>&1 &
                    '''
                }
            }
        }
    }
}
