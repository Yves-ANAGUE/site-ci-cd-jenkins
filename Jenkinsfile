pipeline {
    agent any

    stages {

        stage('Cloner repository') {
            steps {
                git branch: 'main', url: 'https://github.com/Yves-ANAGUE/site-ci-cd-jenkins.git'
            }
        }

        stage('Nettoyer dossier actuel') {
            steps {
                sh 'rm -rf /var/www/site/*'
            }
        }

        stage('Déployer site sur Nginx') {
            steps {
                sh 'cp -r * /var/www/site/'
            }
        }
    }
}