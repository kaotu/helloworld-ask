pipeline {
    agent any
    environment{
        PATH = "$PATH:/usr/local/bin/docker-compose"
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