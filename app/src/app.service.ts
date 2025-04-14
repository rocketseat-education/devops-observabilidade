import { Injectable } from '@nestjs/common';
import { metrics } from '@opentelemetry/api';

@Injectable()
export class AppService {
  getHello(): string {
    const metric = metrics.getMeter('app-rocketseat');
    const successMetric = metric.createCounter('hello_success');
    successMetric.add(1);
    return 'Olá Rocketseat!';
  }
  metricTest(): string {
    const metric = metrics.getMeter('app-rocketseat');
    const errorMetric = metric.createCounter('hello_error');
    errorMetric.add(1);
    const histogram = metric.createHistogram('request_duration');
    histogram.record(1000);
    return 'Métrica adicionada!';
  }
}
