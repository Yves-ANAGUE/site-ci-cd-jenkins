pipeline {
    agent any

    stages {

        stage('Cloner le dépôt') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Yves-ANAGUE/site-ci-cd-jenkins'
            }
        }

        stage('Déployer sur Nginx') {
            steps {
                sh '''
                rm -rf /var/www/site/*
                cp -r * /var/www/site/
                '''
            }
        }
    }
}