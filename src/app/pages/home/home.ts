import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    color: '#e0e0e0',
    scales: {
      r: {
        angleLines: { color: 'rgba(255, 255, 255, 0.2)' },
        grid: { color: 'rgba(255, 255, 255, 0.2)' },    
        pointLabels: { color: '#e0e0e0', font: { size: 14 } },
        ticks: { backdropColor: 'transparent', color: '#e0e0e0' },
        suggestedMin: 0,
        suggestedMax: 100
      }
    }
  };

  public radarChartLabels: string[] = [
    'JavaScript', 
    'C++', 
    'Godot', 
    'HTML/CSS', 
    'TypeScript',
    'Python'
  ];
  
  public radarChartData: ChartConfiguration['data'] = {
    labels: this.radarChartLabels,
    datasets: [
      { 
        data: [50, 30, 30, 50, 30, 30],
        label: 'Nivel de Habilidad (%)',
        backgroundColor: 'rgba(76, 175, 80, 0.2)', 
        borderColor: '#4CAF50', 
        pointBackgroundColor: '#4CAF50'
      }
    ]
  };

  public radarChartType: ChartConfiguration['type'] = 'radar';
}