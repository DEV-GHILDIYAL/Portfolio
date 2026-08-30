pipeline {
    agent any

    environment {
        DEPLOY_PATH = '/opt/apps/portfolio'
        SERVER_IP   = '10.0.1.173'
    }

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:20-alpine'
                    args '-u root'
                }
            }
            steps {
                sh 'npm ci'
                sh 'npm run build'
                stash includes: 'dist/**', name: 'dist'
            }
        }

        stage('Deploy') {
            steps {
                unstash 'dist'
                sshagent(credentials: ['app-server-ssh']) {
                    sh """
                        ssh -o StrictHostKeyChecking=no ubuntu@${SERVER_IP} "mkdir -p ${DEPLOY_PATH}"
                        scp -o StrictHostKeyChecking=no -r dist/* ubuntu@${SERVER_IP}:${DEPLOY_PATH}/
                    """
                }
            }
        }
    }
}