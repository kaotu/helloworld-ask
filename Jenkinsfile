pipeline {
    agent any
    environment{
        PATH = "$PATH:/usr/local/bin/"
    }
    stages{
        stage('Docker compose up'){
            steps{
                sh 'cd ./frontend & docker-compose up -d'
            }
        }
    }
}