import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TopicService } from '../../providers/topic-service';

@Component({
  selector: 'page-topic',
  templateUrl: 'topic.html'
})
export class TopicPage {
  topics:Array<any>;  
  constructor(public navCtrl: NavController, public topicService: TopicService) {
    this.topicService.load().subscribe(
                       topics => this.topics = topics);
  }

  selectTopic(event, topic){
    this.navCtrl.push(TopicPage, {
      topic: topic
    });  
  }

}
