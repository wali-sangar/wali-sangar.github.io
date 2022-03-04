pipeline {
  agent any
    stages {
      
        stage('test') {
          steps {
            echo 'testing feature'
          }
      }
      
      stage('build') {
        echo 'building application'
      }
    
    }
  
      post {
        always {
          echo 'alawyas block executed'
        }
        
        failure {
          echo 'your job for your-pipeline has failed'
        }
      }
   
}
