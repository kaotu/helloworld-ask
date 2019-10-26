pipeline {
    agent any
    environment{
        PATH = "$PATH:/usr/bin"
    }
    stages{
        stage('Docker compose up'){
            steps{
                sh 'cd ./frontend'
                sh 'docker-compose up -d'
            }
        }
    }
}