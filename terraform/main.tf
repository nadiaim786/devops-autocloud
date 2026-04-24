provider "aws" {
  region = "ap-south-1"
}

resource "aws_instance" "app_server" {
  ami           = "ami-0f5ee92e2d63afc18"
  instance_type = "t3.micro"
  key_name      = "autocloud-key-fixed"

  tags = {
    Name = "AutoCloud-Instance"
  }
}