base=5
mask=31
ctx.clearRect(0,0,2000,2000)
v_interval=h_interval
drawPodium(base,h_padding,v_padding)
for(i=0;i<mask;i++){
    drawRight(i,i)
    overwrite(i,i)}
overwrite(mask,mask)