pipline {
  agent any
    stages {
      
        stage('run backend') {
          steps {
            withGradle() {
                echo 'running gradle'
                sh './gradlew -v'
              }
          }
      }
      
      
    }
}
