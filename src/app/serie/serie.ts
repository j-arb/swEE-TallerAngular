export class Serie {
  id: number;
  name: String;
  channel: String;
  seasons: number;
  description: String;
  imageUrl: String;
  url: String;

  constructor(id: number, name: String, channel: String, seasons: number,
      description: String, url: String, imgUrl: String) {
      this.id = id;
      this.name = name;
      this.channel = channel;
      this.seasons = seasons;
      this.description = description;
      this.url = url;
      this.imageUrl = imgUrl;
  }
}
