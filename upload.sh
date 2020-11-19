cd hexo
zip -r public.zip ./public
cd ..
local_path=./hexo/public.zip
remote_path=/home/www/hexoBlog
sftp root@143.110.145.161 <<EOF
put $local_path $remote_path
EOF