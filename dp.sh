APPNAME=admin
ZIPNAME="$APPNAME.tar.gz"
pnpm i && yarn build
rm -rf $ZIPNAME
echo "压缩中..."
tar -cvzf $ZIPNAME ./$APPNAME
echo "压缩成功"

scp $ZIPNAME txy:/data
ssh txy "
  cd /data/ &&
  mkdir -p $APPNAME &&
  tar -xzvf ./$ZIPNAME -C $APPNAME &&
  rm -rf $ZIPNAME
"