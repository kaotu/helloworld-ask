pipeline {
    agent any
    stages{
        stage('Change directory'){
            steps{
                sh 'cd ./frontend'
            }
        }

        stage('Docker compose up'){
            steps{
                sh 'docker-compose up -d'
            }
        }
    }
}