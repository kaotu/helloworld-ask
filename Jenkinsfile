pipeline {
    agent any
    stages{
        stage('Docker compose up'){
            steps{
                sh 'cd ./frontend'
                sh 'docker-compose up -d'
            }
        }
    }
}