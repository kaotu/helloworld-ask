pipeline{
    agent any
    stages{
        stage('Change directory'){
            step{
                sh 'cd ./frontend'
            }
        }

        stage('Docker compose up'){
            step{
                sh 'docker-compose up -d'
            }
        }
    }
}