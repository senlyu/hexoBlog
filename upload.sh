cd hexo
npm run hexo g
zip -r public.zip ./public
cd ..
local_path=./hexo/public.zip
remote_path=/home/www/hexoBlog
sftp $UPLOAD_USERNAME@$UPLOAD_URL <<EOF
put $local_path $remote_path
EOF
ssh $UPLOAD_USERNAME@$UPLOAD_URL 'bash -s' < unzip.sh