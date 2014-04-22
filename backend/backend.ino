
void setup() {
  Serial.begin(9600);
  pinMode(13, OUTPUT);
}

void serialEvent() {
  if (Serial.available() > 0) {
    int read = Serial.read();
//    Serial.print( read, DEC );
    Serial.write( read );
    if (read == '1') {
      digitalWrite(13, HIGH);
    }
    else if (read == '0') {
      digitalWrite(13, LOW);
    }
    else if (read == 10 || read==13) {
      Serial.write("ok.\n");
    }
    
  }
}

void loop() {
}

