import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../home/home.component';
declare var fabric: any;

@Component({
  selector: 'app-customise-product',
  templateUrl: './customise-product.component.html',
  styleUrls: ['./customise-product.component.css']
})
export class CustomiseProductComponent implements OnInit {

  left_sidebar = [
    { image: '/assets/dualshock/main.png' },
    { image: '/assets/dualshock/main.png' },
    { image: '/assets/dualshock/main.png' },
    { image: '/assets/dualshock/main.png' },
    { image: '/assets/dualshock/main.png' }
  ]
  canvas;

  fonts = ["Tangerine", "Potta One", "Montserrat", "Anton", "Dancing Script"];

  merchandise = [
    { name: 'dualshock', images: ['/dualshock/main.png', '/dualshock/buttons.png', '/dualshock/touchpad.png'] },
    { name: 't-sirt', images: ['/t-shirt/main.png', '/t-shirt/tag.png'] },
    { name: 'mask', images: ['/mask/main.png', '/mask/strap.png'] },
  ]
  selected_merch = null;
  features = [
    { name: 'color_filter', enabled: true, image: '/features/color_filter.png' },
    { name: 'Add Text', enabled: false, image: '/features/add_text.png' },
    { name: 'stickers', enabled: false, image: '/features/sticker.png' },
    { name: 'Free Draw', enabled: false, image: '/features/sticker.png' },
  ]
  selected_feature = this.features;

  selected_color = null;

  img_objects = [];
  selected_object = null;

  stickers = ['/stickers/digipodium.png', '/stickers/facebook.png', '/stickers/google.png', '/stickers/monster.png', '/stickers/superman.png',];
  added_images = []
  // selected_sticker = null;

  zoom_level = null;
  min_zoom = 1;
  max_zoom = 10;

  constructor(private activated: ActivatedRoute) { }

  ngOnInit(): void {
    this.selected_merch = this.merchandise.filter(merch => { return merch.name == this.activated.snapshot.paramMap.get('merch') })[0];
    console.log(this.selected_merch);
    this.initCanvas();
    this.selected_merch.images.forEach(img => {
      this.addImage(img);
    })
  }

  toggleFeature(index) {
    this.features.forEach(f => f.enabled = false);
    this.features[index].enabled = true;
    if(this.features[index].name == 'Free Draw'){
      console.log('free draw selected');
      this.canvas.isDrawingMode = true;
    }else{
      this.canvas.isDrawingMode = false;
    }
  }

  initCanvas() {
    this.canvas = new fabric.Canvas('c', {
      width: 1000,
      height: 500,
      // selectionColor: 'red',
      selectionLineWidth: 2,
      // isDrawingMode: true
    });
    this.zoom_level = this.canvas.getZoom();
  }

  setZoomLevel() {
    console.log(this.zoom_level * 0.1 + 1);
    this.canvas.setZoom(this.zoom_level * 0.1 + 1);
  }

  addImage(img_name) {
    fabric.Image.fromURL('/assets' + img_name, (img) => {
      img.selectable = false;
      img.set({
        left: 100,
        top: 0,

      })
      img.scale(0.7);
      this.canvas.add(img);

      this.img_objects.push(img);
      this.selected_object = img;
    })

  }

  applyFilter(img, col) {
    var filter = new fabric.Image.filters.BlendColor({
      color: col,
      mode: 'tint',
      alpha: 0.5
    });
    img.filters = [filter];
    img.applyFilters();
    console.log(img);
  }

  removeFilters(obj) {
    obj.filters = [];
    obj.applyFilters();
  }

  setColor(col) {
    if (col == 'default') {
      this.removeFilters(this.selected_object);
      console.log('removed')
    } else {
      this.selected_color = col;
      this.applyFilter(this.selected_object, col);
    }

    this.canvas.renderAll();
  }

  addSticker(name) {
    fabric.Image.fromURL('/assets' + name, (img) => {

      img.set({
        left: 100,
        top: 100,

      })
      img.scale(0.7);

      this.canvas.add(img);
      this.added_images.push(img);
      // this.selected_sticker = img;
    })
  }

  setObject(index){
    this.selected_object = this.img_objects[index];
    console.log('selected ', index);
    console.log(this.img_objects);
  }

  addPattern(target) {
    fabric.Image.fromURL('/assets/stickers/digipodium.png', (img) => {

      img.scale(0.7);
      target.filters = [img];
      target.applyFilters();
    })

    this.canvas.renderAll();
  }

  removeSticker() {
    const sticker = this.canvas.getActiveObject();
    if (sticker) {
      this.canvas.remove(sticker);
    }
  }

  addText(text) {
    var comicSansText = new fabric.IText(text, {
      fontFamily: 'Arial'
    });
    this.canvas.add(comicSansText);
  }

  setFont(font){
    
    this.canvas.getActiveObject().set("fontFamily", font);
    this.canvas.requestRenderAll();
  }

  setPenWidth(width){
    console.log(width);
    this.canvas.freeDrawingBrush.width = width;
  }

  setPenColor(color){
    console.log(color);
    this.canvas.freeDrawingBrush.color = color;
  }

}