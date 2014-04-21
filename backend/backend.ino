
void setup() {
  Serial.begin(9600);
}

void serialEvent() {
  if (Serial.available() > 0) {
    int read = Serial.read();
//    Serial.print( read, DEC );
    Serial.write( read );
    if (read == 10) {
      Serial.write("ok.\n");
    }
    
  }
}

void loop() {
}

