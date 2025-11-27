pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/TON_USER/TON_REPO.git'
            }
        }

        stage('Clean deploy folder') {
            steps {
                sh 'rm -rf /var/www/site/*'
            }
        }

        stage('Deploy website') {
            steps {
                sh '''
                  cp -r * /var/www/site/
                  chown -R 1000:1000 /var/www/site || true
                '''
            }
        }
    }

    post {
        success {
            echo "🚀 Déploiement réussi !"
        }
        failure {
            echo "❌ Erreur lors du déploiement"
        }
    }
}
