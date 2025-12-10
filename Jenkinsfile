pipeline {
    agent {
        label 'ec2-agent'
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Verify Agent') {
            steps {
                sh '''
                    echo "Hostname:"
                    hostname

                    echo "User:"
                    whoami

                    echo "Java version:"
                    java -version || true

                    echo "Node version:"
                    node -v

                    echo "NPM version:"
                    npm -v
                '''
            }
        }

        stage('Install Backend Dependencies') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Run Backend App') {
            steps {
                dir('backend') {
                    sh '''
                        echo "Stopping old node process (if any)"
                        pkill -f server.js || true

                        echo "Starting app on port 5000"
                        nohup node server.js > app.log 2>&1 &
                    '''
                }
            }
        }
    }

    post {
        success {
            echo "✅ Deployment successful. App running on port 5000"
        }
        failure {
            echo "❌ Deployment failed. Check logs."
        }
    }
}
