#!/bin/bash

if [ ! -f "$1" ]; then
  echo "Файл .pem не знайдено"
  exit 1
fi

key_path=$1

user=$2

ip=$3

new_user=$4

public_key=$5

#ssh -i "$key_path" "$user@$ip"

ssh -i "$key_path" "$user@$ip" "sudo useradd -m -s /bin/bash $new_user"

ssh -i "$key_path" "$user@$ip" "sudo usermod -aG sudo $new_user"

ssh -i "$key_path" "$user@$ip" "sudo passwd -d $new_user"

ssh -i "$key_path" "$user@$ip" "sudo mkdir -p /home/$new_user/.ssh"
ssh -i "$key_path" "$user@$ip" "sudo touch /home/$new_user/.ssh/authorized_keys"

ssh -i "$key_path" "$user@$ip" "echo $public_key | sudo tee -a /home/$new_user/.ssh/authorized_keys"

ssh -i "$key_path" "$user@$ip" "sudo chown -R $new_user:$new_user /home/$new_user/.ssh"

ssh -i "$key_path" "$user@$ip" "sudo chmod 700 /home/$new_user/.ssh"

ssh -i "$key_path" "$user@$ip" "sudo chmod 600 /home/$new_user/.ssh/authorized_keys"
